import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/utils/database";
import Assignment from "@/models/assignments";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await connectToDB();

  switch (method) {
    case "GET":
      try {
        const assignments = await Assignment.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: assignments });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const assignment = await Assignment.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: assignment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
