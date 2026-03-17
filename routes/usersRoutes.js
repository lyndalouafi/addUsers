const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  searchUsers,
  editUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/search", searchUsers);
router.post("/", createUser);
router.get("/", getUsers);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
