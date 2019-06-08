import React from 'react';
import logo from './logo.svg';
import someImage from './mama_papa.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={someImage} className="image-resize"/>
        <p>
        World's Greatest Parents! :D
        </p>
      </header>
    </div>
  );
}

export default App;
