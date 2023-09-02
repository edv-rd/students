"use client";

import Link from "next/link";

export declare interface FormProps {
  type: string;
  submitting: boolean;
  handleSubmit: () => void;
  assignmentName?: string;
  assignmentInstructions?: string;
}

function AssignmentForm({
  type,
  submitting,
  handleSubmit,
  assignmentName,
  assignmentInstructions,
}: FormProps) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">{type}</p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Assignment name
          </span>
          <input
            value={assignmentName && ""}
            /* onChange={(e) => setPost({ ...post, tag: e.target.value })} */
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your assignment
          </span>

          <textarea
            value="test"
            /* onChange={} */
            placeholder="Write your post here"
            required
            className=""
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AssignmentForm;
