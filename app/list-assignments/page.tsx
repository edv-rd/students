import { connectToDB } from "@/utils/database";
import Entry, { Entries } from "@models/entries";
import EntryBadge from "@components/EntryBadge";

type Props = {
  assignments: Entries[];
};

export declare interface IGetAssignments {
  (assignments: Entries[]): Promise<Entries[]>;
}

async function ListAssignments() {
  const assignments = await getAssignments();

  return (
    <>
      {assignments ? (
        assignments.map((assignment) => (
          <EntryBadge key={assignment._id} entry={assignment} />
        ))
      ) : (
        <h1>No assignments yet</h1>
      )}
    </>
  );
}

const getAssignments = async () => {
  await connectToDB();
  let assignments = await Entry.find({});
  return assignments;
};

export default ListAssignments;
