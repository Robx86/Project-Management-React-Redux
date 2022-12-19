import react from "react";
const index = (props) => {
  return (
    <>
      <div className="flex items-center justify-center mt-4 cursor-pointer w-full bg-red-100">
        <div className="rounded max-w-xl flex-grow shadow p-6 relative bg-yellowComplement">
          <div className="sm:flex items-start">
            <div className="">
              <div className="py-1 px-2 top-1 absolute right-0 bg-red-100 flex items-center justify-center rounded-tl-3xl rounded-bl-3xl">
                <p className="text-xs font-semibold text-center text-red-700">
                  Urgent
                </p>
              </div>
              <div className="pt-2">
                <p className="text-lg font-semibold leading-5 pt-1 cursor-pointer text-black ">
                  Tarefa Para número {props.content}
                </p>
                <p className="text-sm leading-4 pt-2 text-gray-800">
                  <span className="text-indigo-700 font-semibold cursor-pointer">
                    Robson Barbosa
                  </span>
                </p>
              </div>
              <div className="mt-2">
                <p className="text-md leading-5 text-gray-800"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
