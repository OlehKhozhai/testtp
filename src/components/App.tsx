import React from "react";

import ItemsList from "./ItemsList/ItemsList";
import "./App.css";
import ItemForm from "./ItemForm/ItemForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Logo</h2>
      </header>
      <ItemsList />
      <ItemForm />
    </div>
  );
};

export default App;
