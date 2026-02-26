import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScoreProvider } from './context/ScoreContext';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Assessment from './pages/Assessment';
import Results from './pages/Results';
import './App.css';

function App() {
  return (
    <ScoreProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ScoreProvider>
  );
}

export default App;
