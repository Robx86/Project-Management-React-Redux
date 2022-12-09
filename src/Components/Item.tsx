import React from "react";

export default function Item() {
  return (
    <div className="bg-white hover:drop-shadow-md z-40">
      <div className="py-4 px-5 flex items-center ">
        <div className="bg-white border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
          />
          <div className="check-icon hidden bg-red-700 text-white rounded-sm">
            <svg
              className="icon icon-tabler icon-tabler-check"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
        </div>
        <p className="ml-3 text-md leading-4 font-normal text-gray-600 dark:text-black-100">
          Task here
        </p>
      </div>
      <style>
        {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
      </style>
    </div>
  );
}
