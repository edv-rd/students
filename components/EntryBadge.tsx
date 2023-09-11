"use client";

import React from "react";

declare interface AssignmentObject {
  entry: object;
  _id: number;
  name: string;
  instructions?: string;
}

function EntryBadge(assignment: AssignmentObject) {
  return (
    <div key={assignment._id}>
      <p>{assignment.name}</p>
      <h2>{assignment.instructions}</h2>
    </div>
  );
}

export default EntryBadge;
