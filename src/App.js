import React from 'react';
import someImage from './mama_papa.jpg';
import './App.css';
import {CSSTransitionGroup} from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WORLD's GREATEST PARENTS! :D</h1>
        <CSSTransitionGroup 
          in={false}
          appear={true}
          timeout={1000}
          classNames="fade"          
          >
          <img src={someImage} className="image-resize"/>
        </CSSTransitionGroup>
      </header>
    </div>
  );
}

export default App;
