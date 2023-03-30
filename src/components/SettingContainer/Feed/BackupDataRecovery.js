import { AiOutlineFilePdf } from "react-icons/ai";

const dataRecovery = [
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
  {
    fileName: "Oladaponin.pdf",
    icon: <AiOutlineFilePdf className="text-3xl mx-auto text-dark-purple" />,
  },
];

const DataRecoveryList = ({ item, id }) => {
  const { fileName, icon } = item;
  return (
    <div key={id} className={`my-6 mr-6`}>
      <div className="bg-gray-100  bg-opacity-40 w-36 h-20 p-4 cursor-pointer text-gray-500">
        <span className="">{icon}</span>
        <span className="flex font-medium text-base mx-auto">{fileName}</span>
      </div>
    </div>
  );
};

const BackupDataRecovery = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-between w-5/6 p-6">
        <div>
          <h1 className="font-bold text-xl mb-3">Backup and Data Recovery</h1>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor asset ifish juxtereb fghdh hdh hfed
          </p>
        </div>
        <div className="mt-11 w-full">
          <button
            className="border-dark-purple border-2 text-dark-purple px-5 py-2 rounded-lg font-semibold cursor-pointer hover:bg-dark-purple hover:text-white translate duration-200 ease-in-out"
            onClick={() => handleChangePassword()}>
            Download All Files
          </button>
        </div>
        <div className="flex flex-wrap w-full">
          {dataRecovery.map((item, _) => (
            <DataRecoveryList item={item} id={_} key={_} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BackupDataRecovery;
