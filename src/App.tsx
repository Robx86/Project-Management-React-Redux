import { useState } from "react";
import Item from "./Components/Item";
import Header from "./Components/Header";
import List from "./List";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App w-full">
      <Header />
      <List />
    </div>
  );
}

export default App;
