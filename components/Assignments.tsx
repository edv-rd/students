"use client";

import React from "react";
import Actions from "@/components/Actions";

declare interface EntryObject {
  entry: {
    type?: string;
    name: string;
    instructions?: string;
    _id?: string;
  };
}

function Assignments(data: EntryObject) {
  const { _id } = data.entry;

  return (
    <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px]">
      <h1 className="mb-2 text-2xl font-bold">{data.entry.name}</h1>
      <h2>{data.entry.instructions}</h2>
      <Actions id={_id} />
    </div>
  );
}

export default Assignments;
