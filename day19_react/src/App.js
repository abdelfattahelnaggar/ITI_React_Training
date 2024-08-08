import React from "react";
import "./App.css";
import NavBar from "./Component/NavBar";
import ProductsList from "./Component/ProductsList";
import Counter from "./Component/counter";

function App() {

  return (
    <div className="App">
      <NavBar />
      <ProductsList />
      <Counter/>
    </div>
  );
}

export default App;
