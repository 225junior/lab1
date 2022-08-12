import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Parent } from './parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bonjour tout le monde
        </p>
        <Parent />
      </header>
    </div>
  );
}

export default App;
