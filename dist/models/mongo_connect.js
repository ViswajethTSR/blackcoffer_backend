"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.configDotenv();
const mongodb_uri = process.env.MONGODB_URI;
mongoose_1.default.connect(mongodb_uri).then(() => {
    console.log('MongoDB connection established.');
})
    .catch((error) => console.error("MongoDB connection failed:", error.message));
