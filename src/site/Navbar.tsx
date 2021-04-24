import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Toolbar } from "@material-ui/core";
import SwitchController from "./SwitchController";


type AcceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserIsAdmin: string) => void;
  clearToken: ()=> void;
  };
  
  export class Navbar extends Component<AcceptedProps, {}> {
    constructor(props: AcceptedProps) {
      super(props);
      this.state = {};
      console.log(props);
    }
    render() {
        return (
          <div className="mainNav">
            <div id="navContainer"></div>
            <h3>User Navbar</h3>
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
              <Button style={{ margin: "1rem 3rem" }}>
                <Link style={{ color: "#000000" }} to="/site/home">
                  User Home
                </Link>
              </Button>
    
              <Button style={{ margin: "1rem 3rem" }}>
                <Link style={{ color: "#000000" }} to="/components/CreatePose">
                  Create a Pose
                </Link>
              </Button>
    
              <Button style={{ margin: "1rem 3rem" }}>
                <Link style={{ color: "#000000" }} to="/components/CreateSequence">
                  Create a Sequence
                </Link>
              </Button>
    
              <Button style={{ margin: "1rem 3rem" }}>
                <Link style={{ color: "#000000" }} to="/components/MySequences">
                  My Sequences
                </Link>
              </Button>
    
              <Button
                style={{ margin: "1rem 3rem" }}
                onClick={this.props.clearToken}>
                <Link style={{ color: "#000000" }} to="/home">
                  Logout
                </Link>
              </Button>
              {console.log("Nav Footer")}
            </Toolbar>
            <SwitchController updateToken={this.props.updateToken} updateUserRole={this.props.updateRole} />
          </div>
        );
      }
    }
    export default Navbar;