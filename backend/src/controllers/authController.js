import User from "../models/userModel.js";

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
      password,
      status: "Active",
      profilePic: "",
    });

    res.status(201).json({ message: "User created", newUser });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (req, res) => {
  console.log("Login");
  res.status(200).json({ message: "Login working" });
};
