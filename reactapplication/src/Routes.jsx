
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpringNasaComponent from './Component/SpringNasaComponent';
// import SpringNasaPage from './Component/SpringNasaPage';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpringNasaComponent />} />
        {/* <Route path="/springnasa" element={<SpringNasaPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;