const mongoose = require("mongoose");

const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://lynda:Lynda2026db@cluster0.etytbvd.mongodb.net/?appName=Cluster0",
      {
        serverSelectionTimeoutMS: 10000,
      },
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

module.exports = connectDB;
