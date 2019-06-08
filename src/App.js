import React from 'react';
import someImage from './mama_papa.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WORLD's GREATEST PARENTS! :D</h1>
        <img src={someImage} className="image-resize"/>
      </header>
    </div>
  );
}

export default App;
