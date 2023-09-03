import { connectToDB } from "@/utils/database";
import Assignment, { Assignments } from "@/models/assignments";
import { GetServerSideProps } from "next";

type Props = {
  assignments: Assignment[];
};

function ListAssignments({ assignments }: Props) {
  console.log(assignments);
  return (
    <>
      {assignments.map((assignment) => (
        <div key={assignment._id}>
          <h1>{assignment.name}</h1>
          <h2>{assignment.instructions}</h2>
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await connectToDB();

  /* find all the data in our database */
  const result = await Assignment.find({});

  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  const assignments = result.map((doc) => {
    const assignment = JSON.parse(JSON.stringify(doc));
    return assignment;
  });

  return { props: { assignments: assignments } };
};

export default ListAssignments;
