import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import SwitchController from "./SwitchController";
type AcceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserIsAdmin: string) => void;
  clearToken: () => void;
  sessionToken: any;
  nameEng: string;
  getAllPoses: any;
  //   index: any;
};

type ValueTypes = {
  anchorEl: any;
  anchorEl2: any;
};

export class Navbar extends Component<AcceptedProps, ValueTypes> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      anchorEl: null,
      anchorEl2: null,
    };
    console.log(props);
  }

  // export default function SimpleMenu() {
  // [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl2: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClose2 = () => {
    this.setState({ anchorEl2: null });
  };
  render() {
    return (
      <div>
        <div>
          <Toolbar
            id="toolbg"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button style={{ margin: "1rem 3rem" }}>
              <Link style={{ color: "#000000" }} to="/site/home">
                User Home
              </Link>
            </Button>
            {/* Poses Menu */}
            <Button
              style={{ margin: "1rem 3rem", textDecoration: "underline" }}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Poses
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>
                <Link
                  style={{ color: "#000000" }}
                  to="/components/poses/CreatePose"
                >
                  Create a Pose
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link
                  style={{ color: "#000000" }}
                  to="/components/poses/GetAllPoses"
                >
                  Edit a Pose
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link
                  style={{ color: "#000000" }}
                  to="/components/poses/GetAllPoses"
                >
                  Delete a Pose
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link
                  style={{ color: "#000000" }}
                  to="/components/poses/GetAllPoses"
                >
                  Get All Poses
                </Link>
              </MenuItem>
            </Menu>
            {/* Sequences Menu */}
            <Button
              style={{ margin: "1rem 3rem", textDecoration: "underline" }}
              aria-controls="simple-menu2"
              aria-haspopup="true"
              onClick={this.handleClick2}
            >
              Sequences
            </Button>
            <Menu
              id="simple-menu2"
              anchorEl={this.state.anchorEl2}
              keepMounted
              open={Boolean(this.state.anchorEl2)}
              onClose={this.handleClose2}
            >
              <MenuItem onClick={this.handleClose2}>
                <Link
                  style={{ color: "#000000" }}
                  to="/components/sequences/CreateSequenceName"
                >
                  Create a Sequence
                </Link>
              </MenuItem>
              {/* <MenuItem onClick={this.handleClose2}>
                <Link
                  style={{ color: "#000000" }}
                  to="/components/sequences/EditSequence"
                >
                  Add a Pose to a Sequence
                </Link>
              </MenuItem> */}
              <MenuItem onClick={this.handleClose2}>
                <Link
                  style={{ color: "#000000" }}
                  to="/components/sequences/SequencesListDeletePose"
                >
                  Get All Sequences Delete Pose
                </Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose2}>
                <Link
                  style={{ color: "#000000" }}
                  to="/components/sequences/SequencesListAddPose"
                >
                  Get All Sequences Add Pose
                </Link>
              </MenuItem>
            </Menu>
            <Button
              style={{ margin: "1rem 3rem" }}
              onClick={this.props.clearToken}
            >
              <Link style={{ color: "#000000" }} to="/home">
                Logout
              </Link>
            </Button>
          </Toolbar>
          <SwitchController
            updateToken={this.props.updateToken}
            updateUserRole={this.props.updateRole}
            sessionToken={this.props.sessionToken}
            nameEng={this.props.nameEng}
            getAllPoses={this.props.getAllPoses}
            // index={this.props.index}
          />
        </div>
      </div>
    );
  }
}
export default Navbar;
