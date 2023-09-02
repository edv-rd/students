"use client";

import AssignmentForm from "@components/AssignmentForm";

function CreateAssignment() {
  const createAssignment = () => {
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
