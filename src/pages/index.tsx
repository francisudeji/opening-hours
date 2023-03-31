import Head from "next/head";
import { Roboto } from "next/font/google";
import { Schedule } from "src/components/Schedule";
import { InferGetServerSidePropsType } from "next";
import { FormattedResponseData } from "src/utils";
import Error from "src/pages/_error";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  if (props.statusCode !== 200) {
    return <Error statusCode={props.statusCode} message={props.message} />;
  }

  return (
    <>
      <Head>
        <title>Opening Hours</title>
        <meta name="description" content="Show weekly opening hours" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={roboto.style}
        className="h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-0"
      >
        <section className="p-8 w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-2xl shadow-gray-200 space-y-4">
          <h1 className="text-gray-400 font-bold text-2xl flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Opening hours</span>
          </h1>
          <ul className="divide-y divide-slate-200 border-t border-t-gray-400 border-b border-b-gray-200 text-base">
            <Schedule schedule={props.data} />
          </ul>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/api/opening-hours");
  const { data, message } = (await response.json()) as FormattedResponseData;

  return {
    props: { statusCode: response.status, data, message },
  };
};
