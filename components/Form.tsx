"use client";

import Link from "next/link";
import { useState, ChangeEvent } from "react";

export declare interface FormData {
  name?: string;
  instructions?: string;
  email?: string;

  // Add other properties as needed
}

export declare interface FormProps {
  type: string;
  submitting: boolean;
  handleSubmit: (data: Object) => void;
}

function Form({ type, submitting, handleSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (formName: string, formValue: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [formName]: formValue,
    }));
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    updateFormData(event.currentTarget.name, event.currentTarget.value);
  };

  return (
    <section className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px]">
      <div className="mb-8 flex flex-col justify-center">
        <h1 className="head_text text-left">Create {type}</h1>
      </div>

      <form
        onSubmit={() => {
          handleSubmit(formData);
        }}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <div className="flex flex-col text-sm rounded-md">
          <input
            value={formData["name"] || ""}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder={`Enter ${type} name`}
            required
            className="form_input"
          />

          {type === "assignment" && (
            <textarea
              value={formData["instructions"] || ""}
              name="instructions"
              onChange={handleChange}
              placeholder="Write your instructions here"
              className="form_input"
            />
          )}

          {type === "user" && (
            <input
              value={formData["email"] || ""}
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="User email"
              required
              className="form_input"
            />
          )}
        </div>
        <div className="flex justify-evenly items-center gap-6">
          <button type="submit" disabled={submitting} className="submit_button">
            {submitting ? `Creating ${type}...` : `Create ${type}`}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
