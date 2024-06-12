import React from 'react';
import Home from './components-todo/home/Home';
import Header from './components-todo/header/Header';
import CompletedPageFull from './CompletedPageFull';
import NotCompletedFull from './NotCompletedFull';
import DeletePageFull from './DeletePageFull';
import {Route, Routes} from 'react-router';

const HomePageFull = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/completed" Component={CompletedPageFull} />
        <Route path="/not-completed" Component={NotCompletedFull} />
        <Route path="/deleted" Component={DeletePageFull} />
      </Routes>
    </div>
  );
};

export default HomePageFull;
