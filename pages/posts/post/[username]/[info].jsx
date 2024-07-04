import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Name = () => {
  const route = useRouter();
  const { username, info, uid } = route.query;
  const [name, setName] = useState("?");

  // useEffect(() => {
  //   fetch("/api/user")
  //     .then((res) => res.json())
  //     .then((data) => setName(data.name));
  // });
  useEffect(() => {
    fetch(`/api/user-info/${uid}`)
      .then((res) => res.json())
      .then((data) => setName(data.name));
  });

  return (
    <div>
      <h1>
        {username}&#39;s {info}
      </h1>
      <h1>Name: {name}</h1>
    </div>
  );
};
export default Name;
