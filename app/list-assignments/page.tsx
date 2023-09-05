import { connectToDB } from "@/utils/database";
import Assignment, { Assignments } from "@/models/assignments";
import { GetServerSideProps } from "next";

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
  console.log("server side props?");
  await connectToDB();
  /* find all the data in our database */
  let assignments = await Assignment.find({});
  console.log(assignments);

  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  //const assignments = await result;

  return assignments;
};

export default ListAssignments;
