"use client";

import React from "react";
import Actions from "@/components/Actions";
import Link from "next/link";

declare interface EntryObject {
  entry: {
    type?: string;
    name: string;
    instructions?: string;
    _id?: string;
  };
  solve?: boolean;
}

function Assignments(data: EntryObject) {
  const { _id } = data.entry;

  return (
    <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px]">
      <h1 className="mb-2 text-2xl font-bold">{data.entry.name}</h1>
      <h2>{data.entry.instructions}</h2>
      <Actions id={_id} />
      {data.solve && (
        <Link href={`/solve-assignment/${data.entry._id}`} className="flex">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Solve assignment {data.entry.name}
          </button>
        </Link>
      )}
    </div>
  );
}

export default Assignments;
