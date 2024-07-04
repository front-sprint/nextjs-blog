import { useRouter } from "next/router";

const Name = () => {
  const { query } = useRouter();
  return <div>JS{JSON.stringify(query)}</div>;
};
export default Name;
