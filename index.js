const express = require("express");
const path = require("path");
const app = express();
const logger = require("./Middleware/middleware");
app.use(logger);
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.port || 5000;
app.listen(port, () => console.log(`server start on ${port}`));
// app.get("/", (req, res) => {

//   res.sendFile(path.join(__dirname, "public", "Home.html"));
// });
