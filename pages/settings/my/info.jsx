import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps() {
  console.log("server");

  return {
    props: {},
  };
}

const MyInfo = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = "initial" } = router.query;
  return (
    <div>
      <h1>My Info</h1>
      <h1>Clicked: {String(clicked)}</h1>
      <h1>Status: {status}</h1>
      <button
        onClick={() => {
          alert("edit");
          setClicked(true); // true로 바뀌지만 페이지가 새로고침되어 false로 초기화됨
          location.replace("/settings/my/info?status=editing");
        }}
      >
        edit(replace)
      </button>
      <br />
      <button
        onClick={() => {
          alert("edit");
          setClicked(true); // rerendering이 되지 않기 때문에 true가 유지됨
          router.push("/settings/my/info?status=editing");
        }}
      >
        edit(push)
      </button>
      <br />
      <button
        onClick={() => {
          alert("edit");
          setClicked(true);
          router.push("/settings/my/info?status=editing", undefined, {
            shallow: true,
          });
        }}
      >
        edit(shallow)
      </button>
      <br />
    </div>
  );
};
export default MyInfo;
