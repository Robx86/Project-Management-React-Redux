import { useState } from "react";
import Item from "./Components/Item";
import Header from "./Components/Header";
import Card from "./Components/Card";

function Home() {
  return (
    <div className="App w-full mb-40">
      <Header />
      <div className="text-yellowComplement container mx-auto items-end justify-end flex max-w-xl">
        <button className="border-2 border-yellowComplement px-4 py-1 hover:bg-yellowComplement rounded-sm font-semibold ease-in-out delay-150 hover:text-black duration-150">
          Add new Project
        </button>
      </div>
      <Card />
      <Card />
    </div>
  );
}

export default Home;
