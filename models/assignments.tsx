import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { Types } from "mongoose";

export interface Assignments extends mongoose.Document {
  name: string;
  description: string;
  instructions: string;
  created: Date;
  deadline: Date;
  archived: boolean;
  assigned_users: Types.ObjectId[];
  assigned_materials: Types.ObjectId[];
  assigned_grades: Types.ObjectId[];
  assigned_solutions: Types.ObjectId[];
}

const AssignmentSchema = new mongoose.Schema<Assignments>({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  description: {
    type: String,
  },
  instructions: {
    type: String,
  },
  created: {
    type: Date,
  },
  deadline: {
    type: Date,
  },
  archived: {
    type: Boolean,
  },
  assigned_users: [
    {
      type: ObjectId,
      ref: "User",
      role: String,
    },
  ],
  assigned_materials: [
    {
      type: ObjectId,
      ref: "Material",
    },
  ],
  assigned_grades: [
    {
      type: ObjectId,
      ref: "Grade",
    },
  ],
  assigned_solutions: [
    {
      type: ObjectId,
      ref: "Solution",
    },
  ],
});

export default mongoose.models.Assignment ||
  mongoose.model<Assignments>("Assignment", AssignmentSchema);
