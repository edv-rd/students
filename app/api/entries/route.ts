import Entry from "@models/entries";
import { connectToDB } from "@utils/database";

export const GET = async (request: Request) => {
  try {
    await connectToDB();

    const entries = await Entry.find({});

    return new Response(JSON.stringify(entries), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch entries", { status: 500 });
  }
};
