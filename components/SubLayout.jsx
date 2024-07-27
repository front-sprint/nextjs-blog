import Link from "next/link";

const SubLayout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Link href={"/"}> Back to Home</Link>
    </div>
  );
};
export default SubLayout;
