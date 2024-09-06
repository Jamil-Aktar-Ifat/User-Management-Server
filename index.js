const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5002;

//middleware
app.use(cors());

const users = [
  { id: 1, name: "Jamil", email: "jamil@yahoo.com" },
  { id: 2, name: "Aktar", email: "aktar@yahoo.com" },
  { id: 3, name: "Ifat", email: "ifats@yahoo.com" },
];

app.get("/", (req, res) => {
  res.send("Users Management Server is running!!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
