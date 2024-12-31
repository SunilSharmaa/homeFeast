import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

let Layout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

let root = ReactDOM.createRoot(document.getElementById("layout"));
root.render(<App />);
