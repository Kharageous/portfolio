import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
