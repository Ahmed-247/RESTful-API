import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT
const mongo_url = process.env.Mongo_url
const jwtSecret = process.env.JWT_Secret

export {port, mongo_url, jwtSecret};
