import React, { Component } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Button } from "@material-ui/core";

type AcceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserIsAdmin: string) => void;
};

type UserState = {
  showLogin: boolean;
};

export default class Auth extends Component<AcceptedProps, UserState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }
  loginToggle = (event: any) => {
    event.preventDefault();
    if (this.state.showLogin === false) {
      return this.setState({
        showLogin: true,
      });
    }
    if (this.state.showLogin === true) {
      return this.setState({
        showLogin: false,
      });
    }
  };
  render() {
    return (
      <div>
        <div>
          {this.state.showLogin ? (
            <div>
              <Signup
                updateToken={this.props.updateToken}
                updateRole={this.props.updateRole}
              />
            </div>
          ) : (
            <div>
              <Login
                updateToken={this.props.updateToken}
                updateRole={this.props.updateRole}
              />
            </div>
          )}
          <br />
          <Button
            variant="contained"
            onClick={(e) => {
              this.loginToggle(e);
            }}
          >
            {this.state.showLogin ? "Login" : "Sign up"}
          </Button>
        </div>
      </div>
    );
  }
}
