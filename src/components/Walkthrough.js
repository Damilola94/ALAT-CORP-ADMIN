import { useState } from "react";
import { MdCancel } from "react-icons/md";

const Walkthrough = ({}) => {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(true);

  const steps = [
    {
      count: 0,
      content:
        "This it tooltips message, you can use it to educate user about the actions.",
    },
    {
      count: 1,
      content:
        "This it tooltips message, you can use it to educate user about the actions.",
    },
    {
      count: 2,
      content:
        "This it tooltips message, you can use it to educate user about the actions.",
    },
    {
      count: 3,
      content:
        "This it tooltips message, you can use it to educate user about the actions.",
    },
    {
      count: 4,
      content: "Notification for your account live here",
    },
  ];

  const nextStep = () => {
    setStep(step + 1);

    if (step === steps.length - 1) {
      setOpen(!open);
    }
  };

  return (
    open && (
      <div className="relative">
        <div
          className={`bg-dark-purple w-2/6 h-fit rounded-lg px-3 py-5 text-left text-white absolute ${
            steps[step].count === 0
              ? "left-[200px] bottom-[450px]"
              : steps[step].count === 1
              ? "left-[478px] bottom-[350px]"
              : steps[step].count === 2
              ? "left-96 bottom-96"
              : steps[step].count === 3
              ? "left-6 bottom-96"
              : steps[step].count === 4
              ? "left-[730px] bottom-[700px] max-[1280px]:left-[560px]"
              : ""
          }`}>
          <div>
            <div className="flex justify-between ">
              {steps[step].content}
              <MdCancel
                className="text-4xl text-white ml-6 shadow-lg cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="mt-5 flex justify-between">
              <button
                onClick={nextStep}
                className="bg-white text-dark-purple p-1 rounded-xl shadow-lg">
                {step === steps.length - 1 ? "Done" : "Continue"}
              </button>
              <div>
                <p>
                  {steps[step].count + 1}
                  <span> of</span> 5
                </p>
              </div>
            </div>
          </div>
          {steps[step].count === 0 ? (
            <div className="absolute right-[39px] top-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-dark-purple "></div>
          ) : steps[step].count === 1 ? (
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-dark-purple "></div>
          ) : steps[step].count === 2 ? (
            <div className="absolute bottom-[35px] right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-dark-purple "></div>
          ) : steps[step].count === 3 ? (
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-dark-purple "></div>
          ) : steps[step].count === 4 ? (
            <div className="absolute right-[39px] top-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-dark-purple "></div>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  );
};

export default Walkthrough;
