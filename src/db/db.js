import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB");
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log("Failed to connect Database", error);
    process.exit(1);
  }
};

export default connectDB;
