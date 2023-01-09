import { useState } from "react";
import Item from "./Components/Item";
import Header from "./Components/Header";
import Card from "./Components/Card";
import image from "./assets/me.png";

function Home() {
  return (
    <div className="min-h-screen bg flex flex-col">
      <Header />
      <div className="container flex flex-grow items-center justify-center">
        <div className="relative flex items-center justify-center overflow-visible">
          <div className=" z-20 backdrop-filter  backdrop-blur-3xl border rounded-lg bg-red-500 bg-opacity-5 border-white border-opacity-80 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">Robson</h3>
            <h4 className="text-sm uppercase tracking-widest mt-2 mb-6 text-white">
              Full Stack Developer
            </h4>
            <div className="flex items-center p-8 flex-col">
              <img
                src={image}
                alt="Robson"
                className="rounded-full w-44 h-44 mb-10"
              />
              <div className="md:px-20 px-2">
                <p className="text-white grow text-lg">
                  Hello, I'm Robson, a full-stack developer experienced for at
                  least 6 years and have been working on several cool projects.
                </p>
                <p className="text-white grow text-lg pb-10">
                  I like TypeScript, ReactJS, Node and PHP too.
                </p>
              </div>
            </div>
            <div className="space-x-8">
              <button className="border-2 bg-yellowComplement border-yellowComplement px-4 py-1 hover:bg-bestGray rounded-sm font-semibold ease-in-out delay-150 hover:text-yellowComplement duration-150">
                Voltar
              </button>
              <button className="border-2 bg-yellowComplement border-yellowComplement px-4 py-1 hover:bg-bestGray rounded-sm font-semibold ease-in-out delay-150 hover:text-yellowComplement duration-150">
                Ver mais projetos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
