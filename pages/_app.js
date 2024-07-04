import "@/styles/globals.css";
import Layout from "@/components/Layout";
import SubLayout from "@/components/SubLayout";

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
