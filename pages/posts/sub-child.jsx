import Layout from "@/components/Layout";
import SubLayout from "@/components/SubLayout";

const SubLayoutChildPage = () => {
  return <div>ChildPage</div>;
};

SubLayoutChildPage.getLayout = (page) => (
  <Layout>
    <SubLayout>{page}</SubLayout>
  </Layout>
);

export default SubLayoutChildPage;
