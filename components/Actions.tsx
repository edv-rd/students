import React from "react";

import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export declare interface ActionsProps {
  id?: string;
}

function Actions({ id }: ActionsProps) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/update-assignments/${id}`);
  };

  const handleDelete = async () => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this assignment?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/entries/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
          body: JSON.stringify({ id: `${id}` }), // Convert object to JSON string
        });
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-row justify-start gap-5">
      <p className="cursor-pointer" onClick={handleEdit}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </p>
      <p className="cursor-pointer" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </p>
    </div>
  );
}

export default Actions;
