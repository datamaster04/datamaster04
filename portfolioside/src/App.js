import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import './App.css';
import * as Pages from ".";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from "./components/Header";

function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/Home" element={<Pages.Home />} />

    <Route path="/om-meg" element={<Pages.OmMeg />} />
    <Route path="/cv" element={<Pages.Cv />} />
    <Route path="/prosjekter" element={<Pages.Prosjekter />} />
    <Route path="/nettbutikk" element={<Pages.Nettbutikk />} />
    <Route path="*" element={<Navigate to="/Home" />} />
  </Routes>
  </BrowserRouter>
                                                                                                                                                                                                                        
}

export default App;
                                                                                                                                                                                                                                                                                                               