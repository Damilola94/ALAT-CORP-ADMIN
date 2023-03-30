import { useState } from "react";
import Head from "next/head";

import {
  AnnouncementContainer,
  EditorCointainer,
  Header,
} from "../../components";

const Announcement = () => {
  const [createAnnouncement, setCreateAnnouncement] = useState(false);

  const handleCreateAnnouncement = () => {
    setCreateAnnouncement(!createAnnouncement);
  };

  return (
    <div className="w-full">
      <Head>
        <title>Alat For Corporative</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <Header pageName={"Communication"} subPageName={"Announcements"} />
        {!createAnnouncement ? (
          <AnnouncementContainer
            handleCreateAnnouncement={handleCreateAnnouncement}
          />
        ) : (
          <EditorCointainer
            handleCreateAnnouncement={handleCreateAnnouncement}
          />
        )}
      </div>
    </div>
  );
};

export default Announcement;