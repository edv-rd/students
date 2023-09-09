import { connectToDB } from "@/utils/database";
import Assignment, { Assignments } from "@/models/assignments";

type Props = {
  assignments: Assignments[];
};

export declare interface IGetAssignments {
  (assignments: Assignments[]): Promise<Assignments[]>;
}

async function ListAssignments() {
  const assignments = await getAssignments();

  return (
    <>
      {assignments ? (
        assignments.map((assignment) => (
          <div key={assignment._id}>
            <p>{assignment.name}</p>
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
  let assignments = await Assignment.find({});
  return assignments;
};

export default ListAssignments;
