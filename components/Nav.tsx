import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row w-full border-b pt-3 gap-2">
      <Link href="/" className="flex">
        <h1 className="head_text">S</h1>
      </Link>
      <Link href="/create-assignment" className="flex">
        <h2 className="link_text">Create assignment</h2>
      </Link>
      <Link href="/list-assignments" className="flex">
        <h2 className="link_text">List assignments</h2>
      </Link>
    </nav>
  );
};

export default Nav;
