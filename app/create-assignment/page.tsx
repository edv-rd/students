"use client";

import AssignmentForm from "@components/AssignmentForm";
import { connectToDB } from "@utils/database";

function CreateAssignment() {
  const createAssignment = (assignment: Object) => {
    connectToDB();
    console.log("Creating assignment...");
  };

  return (
    <AssignmentForm
      type="create_assignment"
      submitting={false}
      handleSubmit={createAssignment}
    />
  );
}

export default CreateAssignment;
