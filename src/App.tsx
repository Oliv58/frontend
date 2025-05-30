import { useForm } from "react-hook-form";
import './App.css';
import React, { useState } from "react";
import BuchSuchForm from "./components/BuchSuchenForm";
import NavBar from "./components/NavBar";

export default function App() {
  const handleFormSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <NavBar />
      <div className="App" style={{ padding: '2rem' }}>
      <BuchSuchForm onSubmit={handleFormSubmit} />
    </div> 
    </>
  );
}
