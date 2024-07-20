import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TTT from './TTT_App/TTT/TTT';
import TTT2 from './TTT_App/TTT/TTT2';
import TTT3 from './TTT_App/TTT/TTT3';
import ScoreBoard from './TTT_App/TTT/scoreBoard';
import { ScoreProvider } from './TTT_App/TTT/ScoreContext';

function App() {
  return (
    <Router>
    <ScoreProvider>
    <ScoreBoard />
      <Routes>
        <Route path="/" element={<HomePageDisplay />} />
        <Route  path="/TTT2" element={<TTT2 />} />
        <Route  path="/TTT" element={<TTT />} />
        <Route  path="/TTT3" element={<TTT3 />} />
      </Routes>
    </ScoreProvider>
    </Router>
  );
}
const HomePageDisplay = () => (
  <TTT />
);

export default App;
