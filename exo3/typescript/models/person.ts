import mongoose, { Schema } from "mongoose";
import { PersonEntry } from "../types";

// definition du schema
const PersonSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
  },
  {
    timestamps: true, // informations -> created at && update at
  }
);

//export du model
export default mongoose.model<PersonEntry>("Person", PersonSchema);
