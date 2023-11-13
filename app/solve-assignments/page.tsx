import { connectToDB } from "@/utils/database";
import Entry, { Entries } from "@models/entries";
import Assignments from "@components/Assignments";

export const revalidate = 0;

type Props = {
  assignments: Entries[];
};

export declare interface IGetAssignments {
  (assignments: Entries[]): Promise<Entries[]>;
}

async function SolveAssignments() {
  const assignments = await getAssignments();

  return (
    <div className="flex flex-col align-middle justify-center p-3 gap-6 min-h-full min-w-screen">
      {assignments ? (
        assignments.map((assignment: Entries) => (
          <>
            <Assignments key={assignment._id} entry={assignment} solve />
          </>
        ))
      ) : (
        <h1>No assignments yet</h1>
      )}
    </div>
  );
}

const getAssignments = async () => {
  await connectToDB();
  let assignments = await Entry.find({});
  // console.log(JSON.parse(JSON.stringify(assignments)));
  return JSON.parse(JSON.stringify(assignments));
};

export default SolveAssignments;
