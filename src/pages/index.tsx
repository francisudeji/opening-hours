import Head from "next/head";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
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
      <main
        style={roboto.style}
        className="h-screen flex items-center justify-center"
      >
        <section className="p-8 w-full max-w-md mx-auto rounded-lg shadow-lg shadow-gray-100  space-y-4">
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
            <li className="py-4 flex items-center justify-between">
              <span className="text-gray-400 font-medium">Monday</span>
              <span className="text-gray-300 font-normal">Closed</span>
            </li>
            <li className="py-4 flex items-center justify-between">
              <span className="text-gray-400 font-medium">Tuesday</span>
              <span>10 AM - 6 PM</span>
            </li>
            <li className="py-4 flex items-center justify-between">
              <span className="text-gray-400 font-medium">Wednesday</span>
              <span className="text-gray-300 font-normal">Closed</span>
            </li>
            <li className="py-4 flex items-center justify-between">
              <span className="text-gray-400 font-medium">Thursday</span>
              <span className="text-gray-400 font-normal">10 AM - 6 PM</span>
            </li>
            <li className="py-4 flex items-center justify-between">
              <span className="text-gray-400 font-medium flex items-center space-x-3">
                <span>Friday</span>
                <span className="text-green text-xs font-bold">TODAY</span>
              </span>
              <span className="text-gray-400 font-normal">10 AM - 1 AM</span>
            </li>
            <li className="py-4 flex items-center justify-between">
              <span className="text-gray-400 font-medium">Saturday</span>
              <span className="text-gray-400 font-normal">10 AM - 1 AM</span>
            </li>
            <li className="py-4 flex items-center justify-between">
              <span className="text-gray-400 font-medium">Sunday</span>
              <span className="text-gray-400 font-normal">12 PM - 9 PM</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
