import React, { Component } from "react";
import APIURL from "../../helpers/environment";
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, TextField } from "@material-ui/core";
// import { YogaPose } from '../Interfaces';
import FormControl from "@material-ui/core/FormControl";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { YogaPose } from "../.././Interfaces";

type AcceptedProps = {
  // Token: string | null;
  // updateRole: (newUserIsAdmin: string) => void;
  // YogaPose: [];
  sessionToken: any;
  poseId: number;
};

type PoseDataState = {
  id: number;
  nameEng: string;
  nameSans: string;
  imgUrl: string;
  poseCat: string;
  // poses: YogaPose[];
  open: boolean;
};
// type PoseDataState = {
//   //   anchorEl: any;
//     id: number;
//   //   nameEng: string;
//   poses: YogaPose[];
//   open: boolean;
// };
export default class EditPoseModal extends Component<
  AcceptedProps,
  PoseDataState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      id: 0,
      nameEng: "",
      nameSans: "",
      imgUrl: "",
      poseCat: "",
      // poses: [],
      open: false,
    };
  }

  componentDidMount() {
    this.fetchPose();
    console.log(this.props.poseId);
  }

  handleSubmit = (e: any) => {
    if (this.props.sessionToken) {
      e.preventDefault();
      // fetch("http://localhost:3000/user/login", {
      fetch(`${APIURL}/pose/update/${this.props.poseId}`, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
        body: JSON.stringify({
          // id: this.props.poseId,
          nameEng: this.state.nameEng,
          nameSans: this.state.nameSans,
          imgUrl: this.state.imgUrl,
          poseCat: this.state.poseCat,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };

  fetchPose = () => {
    if (this.props.sessionToken) {
      // fetch("http://localhost:3000/user/login", {
      fetch(`${APIURL}/pose/one/${this.props.poseId}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
        // body: JSON.stringify({
        //   pose: {
        //     // id: this.props.poseId,
        //     nameEng: this.state.nameEng,
        //     nameSans: this.state.nameSans,
        //     imgUrl: this.state.imgUrl,
        //     poseCat: this.state.poseCat,
        //   },
        // }),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({ nameEng: data.nameEng });
          this.setState({ nameSans: data.nameSans });
          this.setState({ imgUrl: data.imgUrl });
          this.setState({ poseCat: data.poseCat });
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Button
          size="small"
          color="primary"
          onClick={() => this.setState({ open: true })}
        >
          Edit Pose
          {console.log(this.props.poseId)}
        </Button>
        <Dialog
          onClose={() => this.setState({ open: false })}
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="simple-dialog-title">Edit Pose</DialogTitle>
          {/* <h2>Edit a Pose</h2> */}
          <FormControl>
            <TextField
              id="standard-basic"
              label="Pose Name in English"
              type="text"
              value={this.state.nameEng}
              onChange={(e) => {
                this.setState({ nameEng: e.target.value });
              }}
            />
            <TextField
              id="standard-basic"
              label="Pose Name in Sanskrit"
              type="text"
              value={this.state.nameSans}
              onChange={(e) => {
                this.setState({ nameSans: e.target.value });
              }}
            />
            <TextField
              id="standard-basic"
              label="Image Url"
              type="text"
              value={this.state.imgUrl}
              onChange={(e) => {
                this.setState({ imgUrl: e.target.value });
              }}
            />
            <TextField
              id="standard-basic"
              label="Pose Categories"
              type="text"
              value={this.state.poseCat}
              onChange={(e) => {
                this.setState({ poseCat: e.target.value });
              }}
            />
          </FormControl>
          <br />
          <Button variant="contained" onClick={this.handleSubmit}>
            Submit Edit
          </Button>
        </Dialog>
      </div>
    );
  }
}
// npm install --legacy-peer-deps
