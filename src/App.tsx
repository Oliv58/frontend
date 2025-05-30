import { useForm } from "react-hook-form";
import './App.css';
import React, { useState } from "react";
import BuchSuchForm from "./components/BuchSuchenForm";

export default function App() {
  const handleFormSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="App">
      <BuchSuchForm onSubmit={handleFormSubmit} />
    </div>
  );
}
