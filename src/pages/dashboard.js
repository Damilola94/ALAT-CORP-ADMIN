import { useState } from "react";
import Head from "next/head";

import { DashboardContainer, Header, Walkthrough, Modal } from "../components";

const Dashboard = () => {
  const [walkthroughModal, setWalkthroughModal] = useState(false);

  const walkthroughHandler = () => {
    setWalkthroughModal(!walkthroughModal);
  };

  return (
    <div className="w-full bg-[#FAFAFA] h-screen">
      <Head>
        <title>Alat For Corporative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal onClick={walkthroughHandler} />
      <div className="w-full">
        <Header pageName={"Home"} />
        <DashboardContainer />
        {walkthroughModal && <Walkthrough />}
      </div>
    </div>
  );
};

export default Dashboard;
