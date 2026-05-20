import jwt from "jsonwebtoken" 


const authMiddleware = (req, res, next) => {
  try {
    console.log('token', req.headers);
    const token = req.headers.authorization?.split(" ")[1];
    console.log('token-5',token)

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("SECRET:", process.env.JWT_SECRET);
    console.log("TOKEN:", token);

    req.userId = decode.userId;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
