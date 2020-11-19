import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NewsPage from './NewsPage';

function App() {
  return <Route path="/:category?" component={NewsPage}></Route>;
}

export default App;
