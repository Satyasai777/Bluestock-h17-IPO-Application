import React, {createContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import SignIn from './components/Signin';
import SignUp from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import RegisterIPO from './components/RegisterIPO';
import IPOinformation from './components/IPOinformation';
import UpdateLogo from './components/UpdateLogo';
import ManageIPO from './components/ManageIPO'
import { CompanyDataProvider } from './components/CompanyDataContext';
import './App.css';
import App2 from './components/App2';
import Dashboard from './components/Dashboard';

export const CompanyDataContext = createContext();

const App = () => {
  
  

  return (
    <CompanyDataProvider>
      <Router>
          <Routes>
            <Route path="/" element={<App2 />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/home" element={<Home />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="manageIPO" element={<ManageIPO />} />
                <Route path="register" element={<RegisterIPO />}>
                  <Route path="ipoInformation" element={<IPOinformation />} />
                </Route>
            </Route>
            <Route path="/updateLogo" element={<UpdateLogo />} />
          </Routes>
      </Router>
  </CompanyDataProvider>
  );
};

export default App;
