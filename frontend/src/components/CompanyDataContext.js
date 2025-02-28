// src/CompanyDataContext.js
import React, { createContext, useState } from 'react';

export const CompanyDataContext = createContext();

export const CompanyDataProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState({
    name: '',
    type: '',
    location: '',
    logo: null,
  });

  return (
    <CompanyDataContext.Provider value={{ companyData, setCompanyData }}>
      {children}
    </CompanyDataContext.Provider>
  );
};
