"use client";

import Form from "@components/Form";
import { useState } from "react";

function CreateUser() {
  const [submitting, setSubmitting] = useState(false);

  const createUser = async (formData: Object) => {
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
      <Form type="user" submitting={submitting} handleSubmit={createUser} />
    </div>
  );
}

export default CreateUser;
