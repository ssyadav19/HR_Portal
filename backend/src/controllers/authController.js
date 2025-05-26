import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      gender,
      dob,
      qualification,
      department,
      position,
      hiredDate,
      salary,
      password,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !gender ||
      !dob ||
      !qualification ||
      !department ||
      !position ||
      !hiredDate ||
      !salary ||
      !password
    ) {
      console.log("All fields required");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      phone,
      gender,
      dob,
      qualification,
      department,
      position,
      hiredDate,
      salary,
      password: hashedPassword,
      status: "Active",
      profilePic: "",
    });

    res.status(201).json({ message: "User created", newUser });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // console.log(email, password);

    if (!email || !password) {
      console.log("All fields required");
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "invalid email or password" });
    }

    // console.log(user);

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(404).json({ message: "invalid email or password" });
    }

    // console.log("correct");

    res.status(201).json({ message: `welcome back ${user.name}` });
  } catch (error) {
    console.log(error);
  }
};
