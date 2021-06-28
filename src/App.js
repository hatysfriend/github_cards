import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
        <div className="header">{this.props.title}</div>
        <Card/>
      </>
    )
  }
}

export class Card extends Component {
  render() {
    return (
      <div className="github-profile">
        <img src="http://placehold.it/75" alt=""></img>
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    )
  }
}


