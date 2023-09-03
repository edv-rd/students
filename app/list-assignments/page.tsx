import { connectToDB } from "@/utils/database";
import Assignment, { Assignments } from "@/models/assignments";
import { GetServerSideProps } from "next";

type Props = {
  assignments: Assignments[];
};

function ListAssignments({ assignments }: Props) {
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await connectToDB();
  /* find all the data in our database */
  const assignments = await Assignment.find({});
  console.log(assignments);

  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  //const assignments = await result;

  return { props: { assignments: assignments } };
};

export default ListAssignments;
