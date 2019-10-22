import React, { Component } from 'react';

class Contact extends Component {
  state = {
    user: {
    nameFirst: "",
    nameLast: "",
    bestImpression: ""
    },
    showData: this.displayData
  };
  listUser = []
  handleFirstChange = (event) =>{
    this.setState({user: 
      {nameFirst: event.target.value, 
        nameLast: this.state.user.nameLast, 
        bestImpression: this.state.user.bestImpression}}); 
  }
  handleLastChange = (event) =>{
    this.setState({user: 
      {nameFirst: this.state.user.nameFirst, 
        nameLast: event.target.value, 
        bestImpression: this.state.user.bestImpression}});
  }

  handleImpressionChange = (event) =>{
    this.setState({user: 
      {nameFirst: this.state.user.nameFirst, 
        nameLast: this.state.user.nameLast, 
        bestImpression: event.target.value}});
  }

  joinButton = (event) =>{
    let stateString = ((this.state.user.nameFirst) + " " +(this.state.user.nameLast) + " best impression is " + (this.state.user.bestImpression));
    console.log(stateString);
    alert("join button clicked");
    this.setState({user: {nameFirst: '', nameLast: '', bestImpression: ''}})
    
  }
  render() {
    return (
        <>
      <h2>Contact</h2>
      <div>
          <input placeholder = "First Name"
        onChange={this.handleFirstChange} 
        value = {this.state.user.nameFirst}></input>
          <input placeholder = "Last Name"
        onChange={this.handleLastChange} 
        value = {this.state.user.nameLast}></input>
          <input placeholder = "Best Impression"
        onChange={this.handleImpressionChange} 
        value = {this.state.user.bestImpression}></input>
          <button onClick={this.joinButton}>Join Us!</button>
      </div>
      {this.state.user.nameFirst !== '' && this.state.user.city !== '' &&
      this.state.user.bestImpression !== '' &&
         <p>{this.state.user.nameFirst} {this.state.user.nameLast}'s 
         best impression is {this.state.user.bestImpression}</p>}
      <p>Phone: 1-800-WE-REACT</p>
      <p>Email: Info@ReactActors.com</p>
      </>
    );
  }
}

export default Contact;