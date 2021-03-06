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
  // updateToken: (newToken: string) => void;
  // updateRole: (newUserIsAdmin: string) => void;
  // clearToken: () => void;
  sessionToken: any;
  sequenceId: number;
  getAllSequences: () => void;
  // open: boolean;
  // selectedValue: string;
  // onClose: (value: string) => void;
};

type PoseDataState = {
  //   anchorEl: any;
  //   id: number;
  //   nameEng: string;
  poses: YogaPose[];
  open: boolean;
  poseId: number;
  sequenceId: number;
  sequencePose: [];
};

// const handleListItemClick = (value: number) => {
//   onClose(value);
// };

interface SimpleDialogProps extends AcceptedProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default class DeletePosesModal extends Component<
  AcceptedProps,
  PoseDataState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      //   anchorEl: null,
      //   id: 0,
      //   nameEng: "",
      poses: [],
      poseId: 0,
      open: false,
      sequenceId: 0,
      sequencePose: [],
    };
    console.log(props);
  }

  handleClose = () => {
    // this.props.onClose(this.props.selectedValue);
    this.setState({ open: false });
  };

  handleListItemClick = (value: number) => {
    this.handleSubmit(value);
    // this.props.onClose(value);
    this.handleClose();
  };
  handleSubmit = (poseId: number) => {
    if (this.props.sessionToken) {
      // e.preventDefault();
      // fetch("http://localhost:3000/pose/create", {
      fetch(`${APIURL}/sequence/delete/${this.props.sequenceId}/${poseId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
        // body: JSON.stringify({
        //   title: this.state.title,
        //   posesInSequence: this.state.posesInSequence,
        // }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.props.getAllSequences();
        })
        .catch((err) => console.log(err));
    }
  };

  getPoses = () => {
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
      fetch(`${APIURL}/sequence/${this.props.sequenceId}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data, this.props.sessionToken);
          this.setState({ poses: data.poses });
        })
        .catch((err) => console.log(err));
    }
  };
  // classes = useStyles();
  componentDidMount() {
    this.getPoses();
  }

  render() {
    // const { onClose, selectedValue, ...other } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          onClick={() => this.setState({ open: true })}
        >
          Delete Poses from Sequence
        </Button>
        {/* <h3>Add This Pose</h3> */}
        <Dialog
          onClose={() => this.setState({ open: false })}
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="simple-dialog-title">Select a Pose</DialogTitle>
          <List>
            {this.state.poses.map((pose) => (
              <ListItem
                button
                key={pose.id}
                onClick={(e) => {
                  this.setState({ poseId: pose.id });
                  console.log({ poseId: pose.id });
                  this.handleListItemClick(pose.id);
                }}
              >
                <ListItemText primary={pose.nameEng} />
              </ListItem>
            ))}
          </List>
          {console.log(this.state.poseId)}
        </Dialog>
      </div>
    );
  }
}
