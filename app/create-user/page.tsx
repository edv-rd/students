"use client";

import Form from "@components/Form";
import { connectToDB } from "@utils/database";

const createUser = async (data: Object) => {
  await connectToDB();
  console.log("Creating user...");
};

function CreateUser() {
  return <Form type="user" submitting={false} handleSubmit={createUser} />;
}

export default CreateUser;
