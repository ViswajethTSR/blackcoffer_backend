import BlackCofferModel from "../models/blackcoffer_model";
import { Request, Response } from 'express';

export const getAllBlackcofferPaged = async (req: Request, res: Response): Promise<void> => {
  try {
    const pageSize = 500;
    let pageKey = 0;
    let blackcoffer = [];
    let PAGE_COUNT = 0;
    while (true) {
      let tmp = await BlackCofferModel.find({}, {}, { skip: pageKey, limit: pageSize }).lean();
      let resultCount = tmp.length;
      blackcoffer.push(...tmp);
      console.log(`Blackcoffer Set Count: ${PAGE_COUNT++}`)
      if (resultCount < pageSize) break;
      pageKey += resultCount;
    }

    res.status(200).json(blackcoffer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error: error });
  }
};