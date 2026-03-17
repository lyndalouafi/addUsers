const Users = require("../models/usersSchema");

const createUser = async (req, res) => {
  try {
    const addUser = new Users(req.body);
    console.log(req.body);

    await addUser.save();

    console.log("User saved successfully");

    res.status(201).json({
      success: true,
      message: "User saved successfully",
      user: addUser,
    });
  } catch (error) {
    console.error("Error saving user:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await Users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Users.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    console.error("Error deleting user:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const searchUsers = async (req, res) => {
  try {
    const search = req.query.q;

    const users = await Users.find({
      $or: [
        { firstname: { $regex: search, $options: "i" } },
        { lastname: { $regex: search, $options: "i" } },
      ],
    }).select("firstname lastname email city");

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Search error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { createUser, getUsers, editUser, deleteUser, searchUsers };
