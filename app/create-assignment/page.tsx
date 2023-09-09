"use client";

import Form from "@components/Form";
import { connectToDB } from "@utils/database";

const createAssignment = async (data: Object) => {
  await connectToDB();
  console.log("Creating assignment...");
};

function CreateAssignment() {
  return (
    <Form
      type="assignment"
      submitting={false}
      handleSubmit={createAssignment}
    />
  );
}

export default CreateAssignment;
