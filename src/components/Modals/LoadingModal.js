const LoadingModal = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
        <div className="flex items-center min-h-screen justify-center">
          <div className="flex items-center min-h-screen justify-center ">
            <div className="sm:flex lg:block w-full">
              <div className="lg:text-center sm:ml-4 sm:text-left m-6 md:text-center">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingModal;
