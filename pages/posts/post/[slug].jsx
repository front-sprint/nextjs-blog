import { useRouter } from "next/router";

const Name = () => {
  const { query } = useRouter();
  return <div>{query.name}</div>;
};
export default Name;
