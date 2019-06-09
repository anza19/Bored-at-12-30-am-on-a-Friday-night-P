import React from 'react';
import './App.css';
import {CSSTransitionGroup} from 'react-transition-group';

//Reference taken from  @https://medium.com/@gianpaul.r/rendering-new-images-onclick-in-react-7cf0fee2184f

class App extends React.Component{
  constructor(props){
    super(props);

    //bind functions
    this.forwardClick = this.forwardClick.bind(this);
    this.backwardClick = this.backwardClick.bind(this);
    this.toggleAppear = this.toggleAppear.bind(this);

    //to display the image, I am going to use an array, hack way :P
    const img0  = require('/home/anza95/Desktop/my_personal_project/src/hamza_papa.jpg');
    const img1  = require('/home/anza95/Desktop/my_personal_project/src/maha_mama.jpg');
    const img2  = require('/home/anza95/Desktop/my_personal_project/src/mama_papa_maha.jpg');
    const img3  = require('/home/anza95/Desktop/my_personal_project/src/mama_papa.jpg');

    //the state for this component will be the array of images
    this.state = {
      index: 0, //this is the index for the array list
      imgList: [img0, img1, img2, img3], //this as I mentioned above is the array for the images
      photoAppear: false
    }
  }

  //In order to perform transitions, I  need a toggle function
  toggleAppear(){
      this.setState({photoAppear: !this.state.photoAppear});
      console.log(this.state.photoAppear);
  }

  //Next I need a series of functions that will update the list on clicking and stuff!
  //this basically moves the list of images forward, i.e increments index
  forwardClick(){

    //update the index, if it reaches the end we simply set the index to 0
    if(this.state.index+1 === this.state.imgList.length){
      this.setState({index: 0});
    }
    else{
      this.setState({index: this.state.index+1});
    }
  }

  backwardClick(){
    if(this.state.index-1 <= 0){
      this.setState({index: 0});
    }
    else{
      this.setState({index: this.state.index-1}); 
    }
  }

  render(){
    return(
      <div>
        <img src={this.state.imgList[this.state.index]} alt=""/> <br/>
        <CSSTransitionGroup 
          in={this.state.index}
          appear={true}
          timeout={1000}
          classNames="fade"   
          unmountOnExit
          >
          <button onClick={this.toggleAppear}>APPEAR</button>
          <button onClick={this.backwardClick}>BACKWARD</button>
          <button onClick={this.forwardClick}>FORWARD</button>
        </CSSTransitionGroup>

      </div>
    )
  }
}

export default App;