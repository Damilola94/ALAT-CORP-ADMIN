import React, { useState } from "react";

import GlobalContainer from "../ui/GlobalContainer";
import BeneficiaryTable from "../Tables/BeneficiaryTable";
import AddBeneficiaryModal from "../Modals/AddBeneficiaryModal";

const BeneficiaryContainer = () => {
  const [addModal, setAddModal] = useState(false);

  const handleAddModal = () => {
    setAddModal(!addModal);
  };

  return (
    <>
      {addModal && (
        <AddBeneficiaryModal
          handleAddModal={handleAddModal}
          addModal={addModal}
        />
      )}
      <div className="h-fit mb-4">
        <GlobalContainer
          pageName={"Beneficiary"}
          handleAddModal={handleAddModal}
          buttonTitle={"Add Beneficiary"}
        />
        <div className="p-2 mx-6 bg-white rounded-b-lg border border-gray-200">
          <div className="p-1">
            <BeneficiaryTable handleAddModal={handleAddModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeneficiaryContainer;
