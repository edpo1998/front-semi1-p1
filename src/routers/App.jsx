// React
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from '../components/containers/Layout';
import LoginUsuario from '../pages/login';
import DashBoard from '../pages/principal';
import RegistroUsuario from '../pages/registro';
import SubirArchivo from '../pages/subir';

// Pages
//import Home from '../pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={ <Layout/> }>
          <Route path="/" element={ <h1>Hola </h1> } />
          <Route path="/registro" element={ <RegistroUsuario/> } />
          <Route path='/login' element={<LoginUsuario/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/subir' element={<SubirArchivo/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App