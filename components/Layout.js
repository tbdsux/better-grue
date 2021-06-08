import Head from "next/head";

export const WebsiteName = "Grue";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://img.icons8.com/flat_round/64/000000/crane-hook.png"
          type="image/png"
        />
      </Head>
      <main className="antialiased">{children}</main>
    </>
  );
}
