// controllers/authController.js
const jwt = require("jsonwebtoken");
const mockUser = {
  username: "user",
  password: "password",
};

const login = (req, res) => {
  const { username, password } = req.body;

  if (username === mockUser.username && password === mockUser.password) {
    const token = jwt.sign({ username: mockUser.username }, "hello", {
      expiresIn: "1h",
    });
     res.cookie("jwt", token, { httpOnly: true, expiresIn: 3600000 });
    res.json({ message: "Login successful", token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = {
  login,
};
