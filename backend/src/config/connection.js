import mongoose from "mongoose";
import envUtils from "../utils/envDetails.utils.js";

const mongo_url = envUtils.Mongo_url;
await mongoose.connect(mongo_url);

console.log("MongoDB Connected");