import React, { Component } from 'react'
// import logo from './logo.svg'
import Navbar from "./site/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import SwitchController from "../src/site/SwitchController";
import './App.css'
import Auth from './auth/Auth'

type sessionState = {
  sessionToken: string | null;
  isAdmin: string
}

export default class App extends Component<{}, sessionState> {
  constructor(props: sessionState) {
    super(props);
    this.state = {
      sessionToken: "",
      isAdmin: "false"
    };
    this.protectedViews = this.protectedViews.bind(this);
  }

  componentWillMount() {
    if(localStorage.getItem('token')){
      this.setState({
        sessionToken: localStorage.getItem('token')
      })
    }
  }

  componentDidUpdate() {
    // console.log('updated')
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken); //STORING TOKEN 
    this.setState({ sessionToken: newToken });
    // console.log(newToken); 
  };


  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: '' });
  };

  updateRole = (newRole: string) => {
    localStorage.setItem('role', newRole);
    this.setState({ isAdmin: newRole });
    // console.log(newRole);
  };

  protectedViews = () => {
    console.log('userRole: ', this.state.isAdmin)
    
  }

  render() {
    const token: string | null = localStorage.getItem("token");
    return (
      <div className="App">
        <h1>
          Welcome to Flow
    </h1>
        <Router>
        {this.state.sessionToken === '' ? (
          <Auth
            updateToken={this.updateToken}
            updateRole={this.updateRole}
          />
          
        ) :  
        <Navbar
        updateToken={this.updateToken}
        updateRole={this.updateRole}
        clearToken={this.clearToken}
        />}
        </Router>


      </div>
    )
  }
}

