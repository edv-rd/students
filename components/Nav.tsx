import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row w-full pt-3 gap-2 ml-5">
      <Link href="/" className="flex">
        <h1 className="head_text">S</h1>
      </Link>
      <Link href="/create-assignment" className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create assignment
        </button>
      </Link>
      <Link href="/list-assignments" className="flex">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          List assignments
        </button>
      </Link>
      <Link href="/create-user" className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create user
        </button>
      </Link>
      <Link href="/solve-assignments" className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Solve assignment
        </button>
      </Link>
      <Link href="/grade-solutions" className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Grade solution
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
