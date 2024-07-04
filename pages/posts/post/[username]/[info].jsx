import { useRouter } from "next/router";

const Name = () => {
  const route = useRouter();
  const { username, info } = route.query;
  return (
    <div>
      <h1>
        {username}&#39;s {info}
      </h1>
    </div>
  );
};
export default Name;
