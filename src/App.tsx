import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Auth from './auth/Auth'

type sessionState={
  sessionToken: string | null;
  isAdmin: string
}

export default class App extends Component<{}, sessionState> {
  constructor(props:sessionState){
    super(props);
    this.state={
      sessionToken:"",
      isAdmin: "false"
    }
  }

  componentDidUpdate(){
    // console.log('updated')
  }

 updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({sessionToken:newToken});
    // console.log(newToken); 
  };


  clearToken = () => {
    localStorage.clear();
    this.setState({sessionToken:''});
  }

  updateRole= (newRole: string)=> {
    localStorage.setItem('role', newRole);
    this.setState({isAdmin:newRole});
    // console.log(newRole);
  }

render(){
  return (
    <div className="App">
    <h1>
      Welcome to App
    </h1>
  <Auth
  updateToken={this.updateToken}
  updateRole={this.updateRole}
  />

    </div>
  )
}}

