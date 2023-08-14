import { CgSpinner } from "react-icons/cg";

const LoadingScreen = () => {
  return (
    <div className="bg-code-black w-full ">
      <div className="flex flex-col justify-center items-center text-code-white h-[calc(100vh-64px)]">
        <div>
          <CgSpinner className="animate-spin text-3xl " />
        </div>
        <div className="font-bold text-2xl pt-3">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
