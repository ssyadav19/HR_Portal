import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import genToken from "../config/jwToken.js";

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
      startShiftTime,
      endShiftTime,
      address,
      weekOff,
    } = req.body;

    // console.log(
    //   name,
    //   email,
    //   phone,
    //   gender,
    //   dob,
    //   qualification,
    //   department,
    //   position,
    //   hiredDate,
    //   salary,
    //   password,
    //   startShiftTime,
    //   endShiftTime,
    //   address,
    //   weekOff
    // );

    // console.log(req.body);

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
      !password ||
      !startShiftTime ||
      !endShiftTime ||
      !address ||
      !weekOff
    ) {
      console.log("All fields required");
      // return res.status(400).json({ message: "All fields are required" });
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
      startShiftTime,
      endShiftTime,
      address,
      weekOff,
      status: "Active",
      profilePic: "",
    });

    res.status(201).json({ message: "User created", newUser });
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ message: "Server error" });
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
    genToken(user._id, res);

    res.status(201).json({ message: `welcome back ${user.name}` });
  } catch (error) {
    console.log(error);
  }
};
