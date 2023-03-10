import Head from "next/head";

import { TransactionHistoryContainer, Header } from "../../components";

const TransactionHistory = () => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <Head>
        <title>Alat For Corporative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <Header pageName={"Transactions"} subPageName={"Transaction History"} />
        <TransactionHistoryContainer />
      </div>
    </div>
  );
};

export default TransactionHistory;
