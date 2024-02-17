// app.js
const express = require("express");
const app = express();
const port = 3000;

const postRoutes = require("./routes/postRoutes");
const loggingMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");

app.use(express.json());
app.use(loggingMiddleware);

app.use("/api", postRoutes);

app.use(errorHandlingMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
