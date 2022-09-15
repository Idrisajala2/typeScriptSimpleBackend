import mongoose from "mongoose";

type student = {
  name: string;
  color: string;
  height: number;
  short: boolean;
};
interface st extends student, mongoose.Document {}
const studentModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    color: {
      type: String,
    },
    height: {
      type: Number,
    },
    short: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<st>("users", studentModel);
