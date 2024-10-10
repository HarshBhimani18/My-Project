import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Numbers from './components/Numbers';
import Add from './components/Add';
import About from './components/About';
import ContectUs from './components/ContectUs';
import Numberlist from './components/Numberlist';
import Edit from './components/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Add/>}></Route>
          <Route path='/Add' element={<Add/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/ContectUs' element={<ContectUs/>}></Route>
          <Route path='/Numberlist' element={<Numberlist/>}></Route>
          <Route path='/Edit/:id' element={<Edit/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
