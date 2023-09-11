import { connectToDB } from "@/utils/database";
import Entry, { Entries } from "@models/entries";

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
          <div key={assignment._id}>
            <p>{assignment.name}</p>
            <p>{assignment.type}</p>
            <h2>{assignment.instructions}</h2>
          </div>
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
