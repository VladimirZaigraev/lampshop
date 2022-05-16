import React from 'react'
import { Main } from '../Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.sass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
