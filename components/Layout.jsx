import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Neowiz";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className="max-w-xl px-4 py-0 mx-auto mt-12 mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt="profile"
            />
            <h1 className="text-[2.5rem] leading-[1.2] font-extrabold tracking-[-0.05rem] mx-0 my-4">
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={108}
                width={108}
                alt="profile"
              />
            </Link>
            <h2 className="text-2xl leading-[1.4] mx-0 my-4">
              <Link href="/" className="text-inherit">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mx-0 mt-12 mb-0">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
