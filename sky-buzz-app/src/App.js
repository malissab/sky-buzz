import React from 'react';
import { Routes, Route } from "react-router-dom";
import AllAirlines from './AllAirlines';
import Airline from './Airline';
import ErrorPage from './ErrorPage';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={ <AllAirlines /> } />
        <Route path="/airlines/:slug" element={<Airline />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
  );
}

export default App;
