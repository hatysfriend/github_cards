import axios from 'axios';
import React, { Component, useState } from 'react'
// import './App.css'

export default function App({title}) {
  const [profiles, setProfiles] = useState([]);
  
  const addProfile = (profileData) => {
    console.log("new profile data", profileData);
    setProfiles([...profiles, profileData]);
  } 

  let headerStyles = {
    textAlign: "center",
    margin: "20px 20px",
    font: "24px Arial, sans-serif",
    lineHeight: "1.5",
    fontWeight: "bold",
  }

  return (
    <div>
        <div className="header" style={headerStyles}>{title}</div>
        <Form addProfile={addProfile}/>
        <CardList profiles={profiles}/>
    </div>
  )
}

// export default class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     profiles: testData,
//   //   };
//   // }

//   state = {
//     profiles: [],
//   }
  
//   addProfile = (profileData) => {
//     console.log("new profile data", profileData);
//     this.setState({ profiles: [...this.state.profiles, profileData] })
//   } 

//   render() {

//     let headerStyles = {
//       textAlign: "center",
//       margin: "20px 20px",
//       font: "24px Arial, sans-serif",
//       lineHeight: "1.5",
//       fontWeight: "bold",
//     }

//     return (
//       <>
//         <div className="header" style={headerStyles}>{this.props.title}</div>
//         <Form onSubmit={this.addProfile}/>
//         <CardList profiles={this.state.profiles}/>
//       </>
//     )
//   }
// }

function Card({profile}) {
  return (
    <div className="github-profile" style={{margin:"1rem"}}>
        <img src={profile.avatar_url} style={{width:"125px"}} alt=""></img>
        <div className="info" style={{display:"inline-block", marginLeft: 10, verticalAlign: "top", fontSize:"1.5rem" }}>
          <div className="name" style={{fontSize: '125%', fontWeight: "bold"}} alt=">Name here...">{(profile.name)?profile.name:profile.login}</div>
          <div className="company" alt="Company here...">{profile.company}</div>
        </div>
      </div>
  )
}

// class Card extends Component {
//   render() {

//     const profile = this.props;

//     return (
//       <div className="github-profile" style={{margin:"1rem"}}>
//         <img src={profile.avatar_url} style={{width:"125px"}} alt=""></img>
//         <div className="info" style={{display:"inline-block", marginLeft: 10, verticalAlign: "top", fontSize:"1.5rem" }}>
//           <div className="name" style={{fontSize: '125%', fontWeight: "bold"}} alt=">Name here...">{(profile.name)?profile.name:profile.login}</div>
//           <div className="company" alt="Company here...">{profile.company}</div>
//         </div>
//       </div>
//     )
//   }
// }

export const CardList = (props) => {
  return(
    <div>
      {props.profiles.map((profile)=><Card key={profile.id} profile={profile}/>)}
    </div>
  )
}


function Form({addProfile}) {
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${username}`)
    addProfile(response.data);
    setUsername('');
  }

  return (
    <form onSubmit={handleSubmit} style={{display:"inline-block", padding:"2rem", border:"2px solid LightGrey", background:"rgba(232, 232, 232, 0.2)"}}>
        <input 
          type="text" 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="GitHub Username..." 
          required
        />
        <button>Add card</button>
      </form>
  )
}

// class Form extends Component {

//   state = {
//     username: ''
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const response = await axios.get(`https://api.github.com/users/${this.state.username}`)
//     this.props.onSubmit(response.data);
//     this.setState({username:''});
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} style={{display:"inline-block", padding:"2rem", border:"2px solid LightGrey", background:"rgba(232, 232, 232, 0.2)"}}>
//         <input 
//           type="text" 
//           value={this.state.username}
//           onChange={(event) => this.setState({username: event.target.value})}
//           placeholder="GitHub Username..." 
//           required
//         />
//         <button>Add card</button>
//       </form>
//     )
//   }
// }
