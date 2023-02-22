import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { MdConfirmationNumber } from "react-icons/md";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center">
      <Head>
        <title>Alat For Corporative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1">
        <div className="flex w-full h-screen">
          <div className="w-3/6 bg-gradient-to-b from-transparent to-dark-purple relative">
            <img
              src="/bg.jpg"
              alt="Alat for Cooperative"
              className="w-full h-full object-cover absolute mix-blend-overlay bg-opacity-5"
            />
            <div className="p-16">
              <Image
                src="/logo.png"
                alt="Alat for Cooperative"
                width={75}
                height={75}
              />
              <div className="mt-auto absolute bottom-20 ">
                <p className="text-white inline-block font-semibold text-left w-full mb-4">
                  Join Us Today
                </p>
                <h1 className="text-5xl font-bold text-white w-4/6 text-left leading-[51px]">
                  Get started on ALAT for Cooperative Platform
                </h1>
              </div>
            </div>
          </div>
          <div className="w-3/6 bg-white py-56 px-40 text-left">
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: "#980B80" }}>
              Create Account
            </h2>
            <p className="mb-12 w-5/6 text-gray-500">
              Create an account using your existing cooperative Wema account
              number
            </p>
            <div>
              <label className="font-semibold">Wema Account Number</label>
              <div className="bg-input-fill w-3/4 p-2 flex rounded-md items-center mb-3 mt-4 border border-input-outline">
                <MdConfirmationNumber className="text-gray-400 m-2" />
                <input
                  type="text"
                  name="number"
                  placeholder="Enter account number"
                  className="bg-input-fill outline-none text-sm flex-1"
                />
              </div>
            </div>
            <Link href="/success"  className="bg-light-purple text-gray-300 rounded-md w-3/4 px-12 py-2 text-center mt-5 inline-block font-semibold hover:bg-dark-purple hover:text-white">
              Create Account
           </Link>
            
            </div>
        </div>
      </main>
    </div>
  );
}
