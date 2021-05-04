import React, { Component, FunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import APIURL from "../../helpers/environment";
// import SwitchController from "./site/SwitchController";
type AcceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserIsAdmin: string) => void;
  clearToken: () => void;
  sessionToken: any;
};

type PoseDataState = {
  anchorEl: any;
  id: number;
  nameEng: string;
  poses: [];
};

export class AddPosesModal extends Component<AcceptedProps, PoseDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      anchorEl: null,
      id: 0,
      nameEng: "",
      poses: [],
    };
    console.log(props);
  }
  handleSubmit = () => {
    if (this.props.sessionToken) {
      // e.preventDefault();
      // fetch("http://localhost:3000/pose/create", {
      console.log(
        APIURL,
        this.props.sessionToken
        // this.token,
        // this.state.id,
        // this.state.nameEng,
        // this.state.nameSans,
        // this.state.imgUrl,
        // this.state.poseCat
      );
      fetch(`${APIURL}/pose/`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, this.props.sessionToken);
          this.setState({ poses: data });
        })
        .catch((err) => console.log(err));
    }
  };
  // classes = useStyles();
  componentDidMount() {
    this.handleSubmit();
  }
  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    return (
      <div>
        <h3>Add This Pose</h3>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            {/* <Link
              style={{ color: "#000000" }}
              to="/components/poses/CreatePose"
            >
              Whatever
            </Link> */}
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
