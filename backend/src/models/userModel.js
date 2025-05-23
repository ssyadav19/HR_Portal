import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    dob: { type: String, required: true },
    qualification: { type: String, required: true },
    department: { type: String, required: true },
    position: { type: String, required: true },
    hiredDate: { type: String, required: true },
    salary: { type: String, required: true },
    status: {
      type: String,
      enum: ["Active", "Suspended", "Terminated", "Retired", "Resigned"],
      default: "Active",
      required: true,
    },
    profilePic: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
