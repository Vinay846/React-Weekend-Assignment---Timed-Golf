import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, started: false, timeInterval: null };
    this.keyListener = this.keyListener.bind(this);
    this.gameStart = this.gameStart.bind(this);

  }

  keyListener(evt) {
    if(this.state.started){
      if(evt.keyCode === 37){
        this.setState({x: this.state.x -5});
      }else if(evt.keyCode === 38){
        this.setState({y: this.state.y -5});
      }else if(evt.keyCode === 39){
        this.setState({x: this.state.x +5});
      }else if(evt.keyCode === 40){
        this.setState({y: this.state.y +5});
      }
    }
  }
  
  gameStart () {
    this.setState({
      started: true,
    });
    this.timeInterval = setInterval(
      () => this.setState({
        time: this.state.time+1
      }),1*1000
    );
    
    document.addEventListener('keydown', this.keyListener);
  };

  componentDidUpdate() {
    if(this.state.x === 250 && this.state.y === 250){
      clearInterval(this.timeInterval);
      document.removeEventListener('keydown', this.keyListener);
    }
  }

  render() {
    return (
          <>
          <button className="start ballProvider" onClick={this.gameStart}>start</button>
          <div className="ball" style={{ left: this.state.x + "px", top: this.state.y + "px" }}></div>
          <div className="hole"></div>
          <h2 className="heading-timer">{this.state.time}</h2>
          </>
    );
  }
}

export default Timer;
