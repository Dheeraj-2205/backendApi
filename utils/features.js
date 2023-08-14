const jwt = require('jsonwebtoken');
exports.cookieCreator = async(user,res,status = 200, message) =>{
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
    res
      .status(status)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 1000 * 60,
        sameSite : process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure : process.env.NODE_ENV === "Development" ? false : true
      })
      .json({
        success: true,
        message,
      });
}
