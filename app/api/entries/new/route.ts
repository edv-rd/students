import Entry from "@models/entries";

import { connectToDB } from "@utils/database";

export const POST = async (request: Request) => {
  const { formData } = await request.json();
  try {
    await connectToDB();

    const newEntry = new Entry(formData);

    await newEntry.save();

    return new Response(JSON.stringify(newEntry), { status: 200 });
  } catch (error) {
    return new Response(`${error}` + `${formData}`, {
      status: 500,
    });
  }
};
