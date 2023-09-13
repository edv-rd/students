"use client";

import { useState } from "react";

import Form from "@components/Form";

function CreateAssignment() {
  const [submitting, setSubmitting] = useState(false);

  const createAssignment = async (formData: Object) => {
    setSubmitting(true);

    try {
      const response = await fetch("/api/entries/new", {
        method: "POST",
        body: JSON.stringify({
          formData: formData,
        }),
      });
      if (response.ok) {
        console.log("ok!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        type="assignment"
        submitting={submitting}
        handleSubmit={createAssignment}
      />
    </div>
  );
}

export default CreateAssignment;
