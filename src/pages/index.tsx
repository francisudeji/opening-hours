import Head from "next/head";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"], // regular, medium, bold
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Opening Hours</title>
        <meta name="description" content="Show weekly opening hours" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        <h1 className="font-bold text-2xl">Example</h1>
        <h1 className="font-medium text-base">Example</h1>
        <h1 className="font-normal text-base">Example</h1>
        <h1 className="font-bold text-xs uppercase">Example</h1>
      </main>
    </>
  );
}
