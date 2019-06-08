import React from 'react';
import './App.css';
import {CSSTransitionGroup} from 'react-transition-group';

//Reference taken from  @https://medium.com/@gianpaul.r/rendering-new-images-onclick-in-react-7cf0fee2184f

class App extends React.Component{
  constructor(props){
    super(props);

    //bind functions
    this.forwardClick = this.forwardClick.bind(this);

    //to display the image, I am going to use an array, hack way :P
    const img0  = require('/home/anza95/Desktop/my_personal_project/src/hamza_papa.jpg');
    const img1  = require('/home/anza95/Desktop/my_personal_project/src/maha_mama.jpg');
    const img2  = require('/home/anza95/Desktop/my_personal_project/src/mama_papa_maha.jpg');
    const img3  = require('/home/anza95/Desktop/my_personal_project/src/mama_papa.jpg');

    //the state for this component will be the array of images
    this.state = {
      index: 0, //this is the index for the array list
      imgList: [img0, img1, img2, img3] //this as I mentioned above is the array for the images
    }
  }

  //Next I need a series of functions that will update the list on clicking and stuff!

  //this basically moves the list of images forward, i.e increments index
  forwardClick(){
    //update the index

    if(this.state.index+1 === this.state.imgList.length){
      this.setState({index: 0});
    }
    else{
      this.setState({index: this.state.index+1});
    }
  }

  render(){
    return(
      <div>
        <img src={this.state.imgList[this.state.index]} alt=""/> <br/>
        <button onClick={this.forwardClick}>FORWARD</button>
      </div>
    )
  }
}

export default App;