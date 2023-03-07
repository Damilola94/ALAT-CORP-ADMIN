import Head from "next/head";

import { FundTransferContainer, Header, SideBar } from "../../components";

const FundTransfer = () => {
  return (
    <div className="flex bg-[#FAFAFA]">
      <Head>
        <title>Alat For Corporative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <div className="w-screen">
        <Header pageName={"Transactions"} subPageName={"Fund Transfer"} />
        <FundTransferContainer />
      </div>
    </div>
  );
};

export default FundTransfer;