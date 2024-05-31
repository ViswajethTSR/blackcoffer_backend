"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBlackcoffer = void 0;
const blackcoffer_model_1 = __importDefault(require("../models/blackcoffer_model"));
const getAllBlackcoffer = async (req, res) => {
    try {
        const blackcoffer = await blackcoffer_model_1.default.find();
        console.log(blackcoffer);
        res.status(200).json(blackcoffer);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching properties', error: error });
    }
};
exports.getAllBlackcoffer = getAllBlackcoffer;
