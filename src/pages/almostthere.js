import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const AlmostThere = () => {
  const [inputType, setInputType] = useState("password");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center">
      <Head>
        <title>Alat For Corporative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-new.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1">
        <div className="flex w-full justify-center relative bg-dark-purple">
          <Image
            src="/new-bg.png"
            alt="Alat for Cooperative"
            className="w-full object-fill absolute bg-dark-purple"
            width={500}
            height={500}
            priority
          />
          <div className="flex p-16 flex-col w-full text-center justify-center items-center z-10">
            <Image
              src="/logo.png"
              alt="Alat for Cooperative"
              width={75}
              height={75}
            />
            <div className="bg-white w-full max-w-md mt-10 p-10 py-14 rounded-md text-left">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-dark-purple">
                  You are almost there!
                </h2>
                <p className="text-gray-500">
                  Login with email address and password in the email you
                  received
                </p>
              </div>
              <div className="mt-6">
                <label className="font-semibold w-full">Email Address</label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="font-semibold w-full">New Password</label>
                <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill">
                  <input
                    type={inputType}
                    name="password"
                    placeholder="Password"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                  <span className=" text-gray-700">
                    {inputType === "password" ? (
                      <BsEye
                        className="w-5 h-auto cursor-pointer items-center text-[#B5B6B6]"
                        onClick={() => setInputType("text")}
                      />
                    ) : (
                      <BsEyeSlash
                        className="w-5 h-auto cursor-pointer"
                        onClick={() => setInputType("password")}
                      />
                    )}
                  </span>
                </div>
              </div>
              <Link
                href="/change-password"
                className="bg-light-purple text-gray-300 rounded-md w-full px-12 py-2 text-center mt-5 inline-block font-semibold hover:bg-dark-purple hover:text-white"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AlmostThere;