import Layout from "@/components/Layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { DateTime } from "luxon";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const Post = ({ postData }) => {
  console.log("Postdata : ", postData);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.id}
      <br />
      {DateTime.fromISO(postData.date).toFormat("MMMM d, yyyy")}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;
