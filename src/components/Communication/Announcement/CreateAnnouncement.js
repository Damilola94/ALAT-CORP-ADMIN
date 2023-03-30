import GlobalContainer from "../../ui/GlobalContainer";
import Editor from "./Editor";

const CreateAnnouncement = () => {
  return (
    <div className="p-1 max-w-3xl w-full">
      <div className="mt-6">
        <label className="font-semibold w-full">Subject</label>
        <div className="p-2 flex mb-5 mt-2 rounded-md border justify-between items-center border-input-outline bg-input-fill">
          <input
            type="email"
            name="email"
            placeholder="Write a subject here"
            className="bg-input-fill outline-none text-sm flex-1 h-8"
          />
        </div>
      </div>
      <Editor className="min-h-max" placeholder="Write text here ..." />
      <div className="mt-8">
        <label className="font-semibold w-full">Send to</label>
        <div className="p-2 flex mb-5 mt-2 rounded-md border justify-between items-center border-input-outline bg-input-fill">
          <input
            type="email"
            name="email"
            placeholder="Select"
            className="bg-input-fill outline-none text-sm flex-1 h-8"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex">
          <input
            type="checkbox"
            className={"accent-dark-purple p-6"}
            onClick={() => {}}
          />
          <h3 className="ml-3">Send Later</h3>
        </div>
        <div className="flex space-x-3">
          <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill w-1/4">
            <input
              type={"date"}
              name="date"
              className="bg-input-fill outline-none text-sm flex-1 h-6"
            />
          </div>
          <div className="p-2 flex mb-5 mt-5 rounded-md border justify-between items-center border-input-outline bg-input-fill w-1/4">
            <input
              type={"time"}
              name="time"
              className="bg-input-fill outline-none text-sm flex-1 h-6"
            />
          </div>
        </div>
        <div className="container flex justify-end mt-4 space-x-4">
          <button
            type="button"
            onClick={() => {}}
            className={`bg-white text-dark-purple py- px-4 rounded-lg font-semibold cursor-pointer translate duration-200 ease-in-out`}>
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {}}
            className="bg-light-purple text-[#1D0218]  px-12 py-2 rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAnnouncement;
