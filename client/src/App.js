import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from'react';

import Landing from './Pages/Landing';
import Dashboard from './Pages/Dashboard';
import Favorites from './Pages/Favorites';
import Register from "./Pages/Register";


function App() {

  return (
		<Router>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/favorites' element={<Favorites />} />
			<Route path='/register' element={<Register />} />
    </Routes>
		</Router>
  );
}

export default App;
