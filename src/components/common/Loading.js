import React from "react";
import Image from "next/image";
import LoadingModal from "../Modals/LoadingModal";
import Logo from '../../../public/images/loading.gif';

const Loading = ({ message }) => {
  return (
    <LoadingModal>
      <div className="flex flex-col justify-center items-center px-3 pb-5 rounded bg-white text-center">
        <div className="mb-1">
          <Image
            src={Logo}
            priority
            alt="ALAT Logo"
            className="w-auto h-auto"
            height={138}
            width={128}
          />
        </div>
        <p className="text-base font-bold text-dark-purple text-center">{message || "Loading..."}</p>
      </div>
    </LoadingModal>
  );
};

export default Loading;
