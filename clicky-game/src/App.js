import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import FriendContainer from "./components/FriendContainer";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    guess: "Click an image to start!",
    textClass: "",
    shakeClass: ""
  }

  incorrect() {
    this.setState({score: 0, guess: "You guessed incorrectly!"});
    this.setTempState("textClass", "incorrect", 500);
    this.setTempState("shakeClass", "shake", 500);
  }

  correct() {
    let score = this.state.score + 1;
    
    if (score > this.state.topScore) {
      this.setState({score: score, topScore: score, guess: "You guessed correctly!"});
      this.setTempState("textClass", "correct", 500);
    } else {
      this.setState({score: score, guess: "You guessed correctly!"});
    }
  }

  setTempState(stateName, stateValue, delay) {
    this.setState({
      [stateName]: stateValue
    }, () => {
      setTimeout(() => {
        this.setState({
          [stateName]: ""
        })
      }, delay)      
    })
  }
 
  render() {
    return (
      <Wrapper>
        <Navbar       
          score={this.state.score}
          topScore={this.state.topScore}
          textClass={this.state.textClass}
        >{this.state.guess}</Navbar>
        <Instructions></Instructions>
        <FriendContainer shakeClass={this.state.shakeClass}
          onCorrect={() => {this.correct()}}
          onIncorrect={() => {this.incorrect()}}        
        ></FriendContainer>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
