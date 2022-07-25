import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
