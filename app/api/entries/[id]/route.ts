import { connectToDB } from "@utils/database";
import { ObjectId } from "mongodb"; // Import ObjectId from MongoDB

export const DELETE = async (request: Request) => {
  const { id } = await request.json();

  try {
    const db = await connectToDB();

    if (!db) {
      throw new Error("Database not available");
    }

    if (!id) {
      throw new Error("No data query was provided");
    }

    const result = await db
      .collection("entries")
      .deleteOne({ _id: new ObjectId(id) });

    console.log(result);

    if (result.deletedCount === 1) {
      return new Response("Entry deleted successfully", { status: 200 });
    } else {
      return new Response("Entry not found", { status: 404 });
    }
  } catch (error) {
    return new Response(`${error}`, {
      status: 500,
    });
  }
};
