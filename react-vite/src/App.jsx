import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainScreen from './screens/main';
import LoginScreen from './screens/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
