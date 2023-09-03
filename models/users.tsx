import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { Types } from "mongoose";

export interface Users extends mongoose.Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  role: "admin" | "teacher" | "student";
  assigned_assignments: Types.ObjectId[];
  assigned_courses: Types.ObjectId[];
  assigned_solutions: Types.ObjectId[];
  assigned_grades: Types.ObjectId[];
}

const UserSchema = new mongoose.Schema<Users>({
  name: {
    type: String,
    required: [true, "Please provide a name."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email address"],
  },
  role: {
    type: String,
    enum: ["admin", "teacher", "student"],
    default: "student",
  },
  assigned_assignments: [
    {
      type: ObjectId,
      ref: "Assignment",
    },
  ],
  assigned_courses: [
    {
      type: ObjectId,
      ref: "Course",
    },
  ],
  assigned_solutions: [
    {
      type: ObjectId,
      ref: "Solution",
    },
  ],
  assigned_grades: [
    {
      type: ObjectId,
      ref: "Grade",
    },
  ],
});

export default mongoose.models.User ||
  mongoose.model<Users>("User", UserSchema);
