import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Name = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    if (router.isReady) {
      const { name } = router.query;
      setName(name);
      console.log("Router : ", router);
      console.log("name : ", name);
    }
  }, [router.isReady]);

  return <div>Name {JSON.stringify(name, 2, null)}</div>;
};

export default Name;
