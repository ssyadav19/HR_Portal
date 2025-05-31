import jwt from "jsonwebtoken";

const genToken = (userId, res) => {
  try {
    const token = jwt.sign({ key: userId }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("jwt", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.log(error);
  }
};

export default genToken;
