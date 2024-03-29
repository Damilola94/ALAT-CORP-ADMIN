import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

import notification from "../utilities/notification";
import handleFetch from "../services/api/handleFetch";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setButtonDisabled(!(event.target.value));
  };

  const pwdResetMutation = useMutation(handleFetch, {
    onSuccess: (res) => {
      if (res?.statusCode !== 200) {
        notification({
          title: "Record not Found",
          message:
            `${email} isn't found on our system`,
          type: "warning",
        });
      } else {
        router?.push("/forgot-password-success");
      }
    },
    onError: (err) => {
      notification({
        title: "Error",
        message: err?.toString() || "Something went wrong.",
        type: "danger",
      });
    },
  });

  const handlePwdReset = (e) => {
    e.preventDefault();
    if (!(email)) {
      notification({
        title: "Form Error",
        message: "Please, enter your email",
        type: "danger",
      });
      return;
    }
    pwdResetMutation.mutate({
      endpoint :"Auth",
      extra: "forgot-password",
      method: "POST",
      body: { email },
    });
  };

  const { isLoading } = pwdResetMutation;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
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
          <Link href="/login" className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="Alat for Cooperative"
              width={75}
              height={75}
            />
            </Link>
           <div className="bg-white w-full max-w-md mt-10 p-10 py-14 rounded-md text-left">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-dark-purple">
                  Forgot Password?
                </h2>
                <p className="text-gray-500">
                  Please enter the email address associated with your account
                </p>
              </div>
              <div className="mt-6">
                <label className="font-semibold w-full">Email Address</label>
                <div className="p-2 flex mb-3 mt-3 rounded-md border border-input-outline bg-input-fill">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    label="Email Address"
                    placeholder="Email Address"
                    className="bg-input-fill outline-none text-sm flex-1 h-8"
                  />
                </div>
              </div>
                            <button
                  className={`${
                    buttonDisabled && "bg-light-purple text-gray-300"
                  } rounded-md w-full px-12 py-2 text-center mt-8 inline-block font-semibold ${
                    !buttonDisabled &&
                    "hover:bg-dark-purple hover:text-white border border-dark-purple text-dark-purple"
                  }`}
                  type="submit"
                  disabled={buttonDisabled}
                  onClick={handlePwdReset}
                >
                {isLoading ? "Loading..." :"Reset Password"}
                </button>
              <Link
                href="/login"
                className="text-gray-300 rounded-md w-full px-12 py-2 text-center mt-5 inline-block font-semibold hover:text-dark-purple"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;

