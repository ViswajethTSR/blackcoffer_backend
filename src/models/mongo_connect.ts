import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.configDotenv();

const mongodb_uri:string | any=process.env.MONGODB_URI;
mongoose.connect(mongodb_uri).then(() =>{
    console.log('MongoDB connection established.');
})
.catch((error) => console.error("MongoDB connection failed:", error.message))

