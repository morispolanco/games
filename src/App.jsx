import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/ui/Layout';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Investigation from './pages/Investigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="archive" element={<Archive />} />
          <Route path="investigation/new" element={<Investigation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
