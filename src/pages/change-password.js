import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const ChangePassword = () => {
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
          <Image
            src="/new-bg.png"
            alt="Alat for Cooperative"
            className="w-full object-fill absolute bg-dark-purple"
            width={1000}
            height={1000}
          />
          <div className="flex p-16 flex-col absolute w-5/12 text-center justify-center items-center">
            <Image
              src="/logo.png"
              alt="Alat for Cooperative"
              width={75}
              height={75}
            />
            <div className="bg-white w-5/6  mt-10 p-10 py-14 rounded-md text-left">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-dark-purple">
                  Change Password
                </h2>
                <p className="text-gray-500">
                  To access your account, you are required to create a new
                  password
                </p>
              </div>
              <div className="mt-6">
                <label className="font-semibold w-full">New Password</label>
                <div className="p-2 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="font-semibold w-full">Confirm Password</label>
                <div className="p-2 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
              <Link
                href="/change-pwd-success"
                className="bg-light-purple text-gray-300 rounded-md w-full px-12 py-2 text-center mt-5 inline-block font-semibold hover:bg-dark-purple hover:text-white"
              >
                Change Password
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;

ChangePassword.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
