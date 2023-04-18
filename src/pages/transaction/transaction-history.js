import Head from "next/head";

import { TransactionHistoryContainer, Header } from "../../components";
import Layout from "@/components/wrappers/Layout";

const TransactionHistory = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Alat For Corporative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-new.ico" />
      </Head>
      <div className="w-full">
        <Header pageName={"Transactions"} subPageName={"Transaction History"} />
        <TransactionHistoryContainer />
      </div>
    </div>
  );
};

TransactionHistory.getLayout = function PageLayout(page) {
  return <Layout>{page}</Layout>;
};

export default TransactionHistory;
