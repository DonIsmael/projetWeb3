import mongoose, { Schema } from "mongoose";
import { PersonEntry } from "../types";

const PersonSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<PersonEntry>("Person", PersonSchema);
