/* eslint-disable react/no-unescaped-entities */

import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { PortfolioContextProvider } from "./context/portfolioContext";

function App() {
  return (
    <>
      <PortfolioContextProvider>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <section
            style={{
              scrollBehavior: "smooth",
            }}
          >
            <Outlet /> 
          </section>
        </div>
      </PortfolioContextProvider>
    </>
  );
}

export default App;
