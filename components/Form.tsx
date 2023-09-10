"use client";

import Link from "next/link";
import { useState, ChangeEvent, useEffect } from "react";

export declare interface FormData {
  name?: string;
  assignment_instructions?: string;
  user_name?: string;
  user_email?: string;
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
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Create {type} </span>
      </h1>
      <p className="desc text-left max-w-md">Create {type}</p>

      <form
        onSubmit={() => handleSubmit(formData)}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {type} name
          </span>
          <input
            value={formData["name"] || ""}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Name"
            required
            className="form_input"
          />
        </label>
        {type === "assignment" && (
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your assignment
            </span>

            <textarea
              value={formData["assignment_instructions"] || ""}
              name="assignment_instructions"
              onChange={handleChange}
              placeholder="Write your post here"
              required
              className=""
            />
          </label>
        )}

        {type === "user" && (
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              User email
            </span>
            <input
              value={formData["user_email"] || ""}
              name="user_email"
              onChange={handleChange}
              type="text"
              placeholder="User email"
              required
              className="form_input"
            />
          </label>
        )}

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-orange-500 rounded-full text-black"
          >
            {submitting ? `Creating ${type}...` : `Create ${type}`}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
