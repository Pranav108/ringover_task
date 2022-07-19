const express = require("express");

const app = express();
app.use(express.json());

app.get("/api/v1/users", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "project Initialized",
  });
});
const port = 3100;
app.listen(port, () => console.log(`App running on port ${port}...`));
