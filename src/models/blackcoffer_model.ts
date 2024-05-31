import mongoose, { Document, Schema } from 'mongoose';

// Define the TypeScript interface
interface IBlackCoffer extends Document {
  end_year: string;
  intensity: number;
  sector: string;
  topic: string;
  insight: string;
  url: string;
  region: string;
  start_year: string;
  impact: string;
  added: Date;
  published: Date;
  country: string;
  relevance: number;
  pestle: string;
  source: string;
  title: string;
  likelihood: number;
}

const BlackCofferSchema: Schema = new Schema({
  end_year: { type: String, default: '' },
  intensity: { type: Number, required: true },
  sector: { type: String, required: true },
  topic: { type: String, required: true },
  insight: { type: String, required: true },
  url: { type: String, required: true },
  region: { type: String, required: true },
  start_year: { type: String, default: '' },
  impact: { type: String, default: '' },
  added: { type: Date, required: true },
  published: { type: Date, required: true },
  country: { type: String, required: true },
  relevance: { type: Number, required: true },
  pestle: { type: String, required: true },
  source: { type: String, required: true },
  title: { type: String, required: true },
  likelihood: { type: Number, required: true }
});

const BlackCofferModel = mongoose.model<IBlackCoffer>('jsondata', BlackCofferSchema);

export default BlackCofferModel;
