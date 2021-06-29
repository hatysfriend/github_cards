import React, { Component } from 'react'
// import './App.css'

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }

  state = {
    profiles: testData,
  }

  render() {

    let headerStyles = {
      textAlign: "center",
      margin: "20px 20px",
      font: "24px Arial, sans-serif",
      lineHeight: "1.5",
      fontWeight: "bold",
    }

    return (
      <>
        <div className="header" style={headerStyles}>{this.props.title}</div>
        <Form/>
        <CardList profiles={this.state.profiles}/>
      </>
    )
  }
}

export class Card extends Component {
  render() {

    const profile = this.props;

    return (
      <div className="github-profile" style={{margin:"1rem"}}>
        <img src={profile.avatar_url} style={{width:"125px"}} alt=""></img>
        <div className="info" style={{display:"inline-block", marginLeft: 10, verticalAlign: "top", fontSize:"1.5rem" }}>
          <div className="name" style={{fontSize: '125%', fontWeight: "bold"}} alt=">Name here...">{profile.name}</div>
          <div className="company" alt="Company here...">{profile.company}</div>
        </div>
      </div>
    )
  }
}

export const CardList = (props) => {
  return(
    <div>
      {props.profiles.map((profile)=><Card key={profile.name + Date.now()} {...profile}/>)}
    </div>
  )
}

export class Form extends Component {

  state = {
    username: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display:"inline-block", padding:"2rem", border:"2px solid LightGrey", background:"rgba(232, 232, 232, 0.2)"}}>
        <input 
          type="text" 
          value={this.state.username}
          onChange={(event) => this.setState({username: event.target.value})}
          placeholder="GitHub Username..." 
          required
        />
        <button>Add card</button>
      </form>
    )
  }
}


const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];