"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBlackcofferPaged = void 0;
const blackcoffer_model_1 = __importDefault(require("../models/blackcoffer_model"));
const getAllBlackcofferPaged = async (req, res) => {
    try {
        const pageSize = 500;
        let pageKey = 0;
        let blackcoffer = [];
        let PAGE_COUNT = 0;
        while (true) {
            let tmp = await blackcoffer_model_1.default.find({}, {}, { skip: pageKey, limit: pageSize }).lean();
            let resultCount = tmp.length;
            blackcoffer.push(...tmp);
            console.log(`Blackcoffer Set Count: ${PAGE_COUNT++}`);
            if (resultCount < pageSize)
                break;
            pageKey += resultCount;
        }
        res.status(200).json(blackcoffer);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching properties', error: error });
    }
};
exports.getAllBlackcofferPaged = getAllBlackcofferPaged;
