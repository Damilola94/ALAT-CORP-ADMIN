import Head from "next/head";

import { ChatContainer, Header } from "../../components";

const Calendar = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Alat For Corporative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <Header pageName={"Transactions"} subPageName={"Fund Transfer"} />
        <ChatContainer />
      </div>
    </div>
  );
};

export default Calendar;
