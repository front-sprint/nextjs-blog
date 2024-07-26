import Head from "next/head";
import Layout, { siteTitle } from "@/components/Layout";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { DateTime } from "luxon";
// import { useEffect, useState } from "react";

// SSR (Server Side Rendering)
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// SSG (Static Site Generate)
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// SSG (Static Site Generate) - Local API
// export async function getStaticProps() {
//   const response = await fetch("http://localhost:3000/api/posts");
//   const json = await response.json();

//   return {
//     props: {
//       allPostsData: json.allPostsData,
//     },
//   };
// }

export default function Home({ allPostsData }) {
  // const [allPostsData, setAllPostsData] = useState([]);
  // useEffect(() => {
  //   fetch("/api/posts")
  //     .then((res) => res.json())
  //     .then((data) => setAllPostsData(data.allPostsData));
  // });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-[1.2rem] leading-normal">
        <p className="my-4">Searching for meaning</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="text-[1.2rem] leading-normal pt-px">
        <h2 className="text-2xl leading-[1.4] mx-0 my-4">Blog</h2>
        <ul className="p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mx-0 mt-0 mb-5" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>{DateTime.fromISO(date).toFormat("MMMM d, yyyy")}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
