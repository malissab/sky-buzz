import React from 'react';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import AllAirlines from './AllAirlines';
import Airline from './Airline';
import ErrorPage from './ErrorPage';


function App() {
  return (
    <div className="App">
      
    <Routes>
    <Route path="/" element={ <AllAirlines /> } />
        <Route path="/airlines/:slug" element={<Airline />} />
        <Route path="*" element={ <ErrorPage /> } />
        </Routes>
 
   <h1>Hello</h1>
    </div>
  );
}

export default App;
