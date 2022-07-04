import React from 'react';
import { Main } from '../Main/Main';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.sass';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
