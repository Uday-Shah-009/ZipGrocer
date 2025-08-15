import { verify_jwt } from "../utils/jwtHelper.js";

export const authMiddleware = (req, res, next) => {
  let token;
  if (req.cookies?.token) {
    token = req.cookies.token;
  } else if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) return res.status(401).json({ message: "unauthorized" });

  try {
    const decoded = verify_jwt(token);
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ message: "unauthorized please login again" });
  }

  next();
};
