import User from "../models/userModel.js";

export const getUserData = (req, res, next) => {
  try {
    const userId = req.user._id;

    const user = User.findById(userId);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        department: user.department,
        dob: user.dob,
        position: user.position,
        startShiftTime: user.startShiftTime,
        endShiftTime: user.endShiftTime,
        address: user.address,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
