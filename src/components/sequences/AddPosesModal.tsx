import React, { Component, FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
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
};

// const handleListItemClick = (value: number) => {
//   onClose(value);
// };

interface SimpleDialogProps extends AcceptedProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default class AddPosesModal extends Component<
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
      open: false,
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
      fetch(`${APIURL}/sequence/addpose/${this.props.sequenceId}/${poseId}`, {
        method: "PUT",
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
          Add Poses to Sequence
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
                onClick={() => this.handleListItemClick(pose.id)}
                key={pose.id}
              >
                <ListItemText primary={pose.nameEng} />
              </ListItem>
            ))}
          </List>
        </Dialog>
      </div>
    );
  }
}
// SimpleDialog.propTypes = {
//   classes: PropTypes.object.isRequired,
//   onClose: PropTypes.func,
//   selectedValue: PropTypes.string,
// };

// const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

// class SimpleDialogDemo extends React.Component {
//   state = {
//     open: false,
//     selectedValue: poses[1],
//   };

//   handleClickOpen = () => {
//     this.setState({
//       open: true,
//     });
//   };

//   handleClose = (value) => {
//     this.setState({ selectedValue: value, open: false });
//   };

//   render() {
//     return (
//       <div>
//         <Typography variant="subtitle1">
//           Selected: {this.state.selectedValue}
//         </Typography>
//         <br />
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={this.handleClickOpen}
//         >
//           Open simple dialog
//         </Button>
//         <SimpleDialogWrapped
//           selectedValue={this.state.selectedValue}
//           open={this.state.open}
//           onClose={this.handleClose}
//         />
//       </div>
//     );
//   }
// }
