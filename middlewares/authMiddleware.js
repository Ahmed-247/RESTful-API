import jwt from "jsonwebtoken";
import { jwtSecret } from "../utils/config.js";

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });
console.log(token)
    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded; // Make sure this contains .userid
        
        next();
    } catch (err) {
        console.log(err)
        
        return res.status(403).json({ message: "Invalid token" });
    }
};

export default authMiddleware;
