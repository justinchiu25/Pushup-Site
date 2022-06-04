import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Components/Error';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Homepage />} />
          <Route path="user" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}