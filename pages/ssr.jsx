// export function getServerSideProps() {
//   return { props: { time: new Date().toISOString() } };
// }

import SubLayout from "@/components/SubLayout";

export function getStaticProps() {
  return { props: { time: new Date().toISOString() } };
}

const SSR = (props) => {
  return <div className="text-center">Test {props.time}</div>;
};

export default SSR;

SSR.backToHome = (page) => {
  return <SubLayout>{page}</SubLayout>;
};
