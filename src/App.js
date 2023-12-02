import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Component/router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
