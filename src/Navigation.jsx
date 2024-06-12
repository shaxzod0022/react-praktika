import React from 'react';
import HomePageFull from './HomePageFull';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './wather/home/Home';

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" Component={HomePageFull} />
          {/* <Route path='/' Component={Home}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
