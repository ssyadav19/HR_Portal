import User from "../models/userModel.js";

export const getUserData = (req, res, next) => {
  try {
    const userData = req.user;

    // console.log(userData);

    res.status(200).json({message:"user data fetched", userData});
  } catch (error) {
    console.log(error);
    next(error);
  }
};
