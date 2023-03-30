import GlobalContainer from "../../ui/GlobalContainer";
import CreateAnnouncement from "./CreateAnnouncement";

const EditorCointainer = ({ handleCreateAnnouncement }) => {
  return (
    <>
      <div className="h-fit mb-4">
        <GlobalContainer
          handleAddModal={handleCreateAnnouncement}
          pageName={"Create Announcement"}
          backButton
        />
        <div className="p-2 mx-6 bg-white rounded-b-lg border border-gray-200">
          <div className="flex p-1 justify-center">
            <CreateAnnouncement
              handleCreateAnnouncement={handleCreateAnnouncement}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorCointainer;
