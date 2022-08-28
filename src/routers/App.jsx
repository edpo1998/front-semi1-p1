// React
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from '../components/containers/Layout';

// Pages
//import Home from '../pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={ <Layout/> }>
          <Route path="/" element={ <h1>Hola </h1> } />
          <Route path="/test" element={ <h1>Test </h1> } />
        </Route>
      </Routes>
    </Router>
  );
};

export default App