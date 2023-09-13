"use client";

import React from "react";

declare interface EntryObject {
  entry: {
    type?: string;
    name: string;
    instructions?: string;
  };
}

function Assignments(data: EntryObject) {
  return (
    <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px]">
      <h1 className="mb-2 text-2xl font-bold">{data.entry.name}</h1>
      <h2>{data.entry.instructions}</h2>
    </div>
  );
}

export default Assignments;
