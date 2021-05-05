import React, { Component, FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import APIURL from "../../helpers/environment";
import { YogaPose } from "../.././Interfaces";
// import SwitchController from "./site/SwitchController";
type AcceptedProps = {
  updateToken: (newToken: string) => void;
  updateRole: (newUserIsAdmin: string) => void;
  clearToken: () => void;
  sessionToken: any;
  sequenceId: number;
};

type PoseDataState = {
  //   anchorEl: any;
  //   id: number;
  //   nameEng: string;
  poses: YogaPose[];
  open: boolean;
};

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
const handleListItemClick = (value: number) => {
  onClose(value);
};

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

// function SimpleDialog(props: SimpleDialogProps) {
//   const classes = useStyles();
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value: string) => {
//     onClose(value);
//   };
// }

export class AddPosesModal extends Component<AcceptedProps, PoseDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      //   anchorEl: null,
      //   id: 0,
      //   nameEng: "",
      poses: [],
      open: false,
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
  //   handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     this.setState({ anchorEl: event.currentTarget });
  //   };
  //   handleClose = () => {
  //     this.setState({ anchorEl: null });
  //   };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          onClick={() => this.setState({ open: true })}
        >
          Add Poses to Sequence
        </Button>
        {/* <h3>Add This Pose</h3> */}
        <Dialog
          onClose={() => this.setState({ open: false })}
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
          <List>
            {this.state.poses.map((pose) => (
              <ListItem
                button
                onClick={() => handleListItemClick(pose.id)}
                key={pose.id}
              >
                {/* {this.props.poses.map((pose, index) => (
          <PosesCard
            sessionToken={this.props.sessionToken}
            pose={pose}
            index={index} */}

                {/* <ListItemAvatar> */}
                {/* <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar> */}
                <ListItemText primary={pose} />
              </ListItem>
            ))}
            {/* <ListItem
              autoFocus
              button
              onClick={() => handleListItemClick("addAccount")}
            > */}
            {/* <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar> */}
            {/* <ListItemText primary="Add account" />
            </ListItem> */}
          </List>
        </Dialog>
        {/* <Menu
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
              Whatever
            </Link>
          </MenuItem>
        </Menu> */}
      </div>
    );
  }
}
