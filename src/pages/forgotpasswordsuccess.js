import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ForgotPasswordSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center">
      <Head>
        <title>Alat For Corporative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1">
        <div className="flex w-full justify-center relative">
          <img
            src="/new-bg.png"
            alt="Alat for Cooperative"
            className="w-full object-cover absolute bg-dark-purple"
          />
          <div className="flex p-16 flex-col absolute w-5/12 text-center justify-center items-center">
            <Image
              src="/logo.png"
              alt="Alat for Cooperative"
              width={75}
              height={75}
            />
            <div className="bg-white w-5/6  mt-10 p-10 py-24 rounded-md text-center">
              <div>
                <IoMdCheckmarkCircleOutline className="text-green-500 w-full text-4xl mb-4" />
                <h2 className="text-3xl font-bold mb-4 text-dark-purple">
                  Success!
                </h2>
                <p className="text-gray-500">
                  We have sent you a reset password link to your email address.
                </p>
              </div>
              <Link
                href="/login"
                className="bg-light-purple text-gray-300 rounded-md w-full px-8 py-2 text-center mt-9 inline-block font-semibold hover:bg-dark-purple hover:text-white">
                Return to Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPasswordSuccess;
