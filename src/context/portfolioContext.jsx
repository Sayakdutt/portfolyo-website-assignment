import { createContext, useContext, useEffect, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});

  const fetchUserDetails = async () => {
    try {
      const res = await fetch(
        `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
      );
      const data = await res.json();
      setUserDetails(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching data", error.message);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <PortfolioContext.Provider value={{ userDetails }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioDetails = () => useContext(PortfolioContext);
