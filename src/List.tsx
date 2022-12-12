import { useState } from "react";
import Item from "./Components/Item";
import Header from "./Components/Header";
import MenuProject from "./Components/MenuProject";
import Task from "./Components/Task";

function App() {
  return (
    <div className="App w-full">
      <MenuProject />
      <div className="container mx-auto">
        <div className="flex justify-center space-x-5">
          <div className="w-80 border-2 border-gray-500 bg-red-400 bg-opacity-10 h-min rounded-md text-white ">
            <p className="p-2 pl-4 font-semibold text-red-400 ">To Do</p>
            <div className="p-2 pb-3">
              <Task />
              <Task />
            </div>
          </div>
          <div className="w-80 border-2 border-gray-500 h-min rounded-md text-white bg-yellow-400 bg-opacity-10">
            <p className="p-2 pl-4 font-semibold text-yellowComplement">
              In Progress
            </p>
            <div className="p-2 pb-3">
              <Task />
              <Task />
              <Task />
            </div>
          </div>
          <div className="w-80 border-2 h-min border-gray-500 rounded-md text-white bg-green-400 bg-opacity-10">
            <p className="p-2 pl-4 font-semibold text-green-400">Completed</p>
            <div className="p-2 pb-3">
              <Task />
            </div>
          </div>
          {/* <div className="text-white border-2 w-full border-stone-400 rounded-lg">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
