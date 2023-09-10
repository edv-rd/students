"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

function CreateAssignment() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const createAssignment = async (formData: Object) => {
    setSubmitting(true);

    console.log("Creating assignment...");
    try {
      const response = await fetch("/api/entries/new", {
        method: "POST",
        body: JSON.stringify({
          formData: formData,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="assignment"
      submitting={submitting}
      handleSubmit={createAssignment}
    />
  );
}

export default CreateAssignment;
