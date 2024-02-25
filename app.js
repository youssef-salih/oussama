// app.js
const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
const loggingMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");

app.use(express.json());
app.use(loggingMiddleware);
app.use(cookieParser());
app.use("/api", postRoutes);
app.use("/auth", authRoutes);
app.use(errorHandlingMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
