import mongoose, { Model } from 'mongoose';

export interface Challenge {
  name: string;
  startdate: string;
  enddate: string;
  description: string;
  image: string;
  level: string;
  event: string;
}

const ChallengeSchema = new mongoose.Schema<Challenge>(
  {
    name: {
      type: String,
      trim: true,
    },
    startdate: {
      type: String,
      trim: true,
    },
    enddate: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    level: {
      type: String,
      trim: true,
    },
    event: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

export const Challenges: Model<Challenge> =
  mongoose.models.hackthon || mongoose.model<Challenge>('hackthon', ChallengeSchema);
