
import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import SpringNasaComponent from './components/SpringNasaComponent';
import SecondPage from './components/SecondPage';

// import springNasaPage from './components/springNasaPage';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpringNasaComponent />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;