const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const usersRoutes = require("./routes/usersRoutes");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: [
      "https://addusers-25c12.web.app/",
      "https://addusers-25c12.firebaseapp.com",
    ],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
