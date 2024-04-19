import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res
      .status(401)
      .json({ status: "error", message: "Authentication failed" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decode = jwt.decode(token, process.env.JWT_SECRET_KEY);
    req.userId = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ status: "error", message: "Authentication failed" });
  }
};
