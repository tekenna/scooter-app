const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
app.use(cors());
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App islistening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
