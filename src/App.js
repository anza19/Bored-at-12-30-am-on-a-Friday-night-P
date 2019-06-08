import React from 'react';
import someImage from './mama_papa.jpg';
import './App.css';
import {CSSTransitionGroup} from 'react-transition-group';

class App extends React.Component{
  constructor(props){
    super(props);

    //define state here
    this.state = {
      name: "Initial State!"
    }

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({name: "React Rocks"});
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>CLICK ME</button>
        <h1>{this.state.name}</h1>
      </div>

    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>WORLD's GREATEST PARENTS! :D</h1>
//         <CSSTransitionGroup 
//           in={false}
//           appear={true}
//           timeout={1000}
//           classNames="fade"          
//           >
//           <img src={someImage} className="image-resize"/>
//         </CSSTransitionGroup>
//       </header>
//     </div>
//   );
// }

export default App;
