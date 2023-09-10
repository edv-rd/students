import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/utils/database";
import Entry from "@/models/entries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await connectToDB();

  console.log(req);

  switch (method) {
    case "GET":
      try {
        const entries = await Entry.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: entries });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const entry = await Entry.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: entry });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
