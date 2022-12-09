import { useState } from "react";
import Item from "./Components/Item";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App w-full">
      <Header />
      <div>
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
              ToDo React
            </h4>
            <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
              <li className="flex items-center mr-4">
                <div className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-paperclip"
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
                    <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                  </svg>
                </div>
                <span>Active</span>
              </li>

              <li className="flex items-center mt-4 md:mt-0">
                <div className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plane-departure"
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
                    <path
                      d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                      transform="rotate(-15 12 12) translate(0 -1)"
                    />
                    <line x1={3} y1={21} x2={21} y2={21} />
                  </svg>
                </div>
                <span>Stated on 08 Dec 2022</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="mr-3 bg-gray-200 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700  dark:text-indigo-600 px-5 py-2 text-sm">
              Back
            </button>
            <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Add new Task
            </button>
          </div>
          {/* Code block ends */}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-white border-2 w-full border-stone-400 rounded-lg">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
