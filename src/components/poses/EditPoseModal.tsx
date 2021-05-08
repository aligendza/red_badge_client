import React, { Component } from "react";
import APIURL from "../../helpers/environment";
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, FormControl, TextField } from "@material-ui/core";
// import { YogaPose } from '../Interfaces';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { YogaPose } from "../.././Interfaces";

type AcceptedProps = {
  Token: string | null;
  // updateRole: (newUserIsAdmin: string) => void;
  // YogaPose: [];
};

type PoseDataState = {
  id: number;
  nameEng: string;
  nameSans: string;
  imgUrl: string;
  poseCat: string;
  poses: YogaPose[];
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
      poses: [],
      open: true,
    };
  }

  handleSubmit = (e: any) => {
    if (this.props.Token) {
      e.preventDefault();
      // fetch("http://localhost:3000/user/login", {
      fetch(`${APIURL}/update/:entryId`, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.Token,
        }),
        body: JSON.stringify({
          pose: {
            id: this.state.id,
            nameEng: this.state.nameEng,
            nameSans: this.state.nameSans,
            imgUrl: this.state.imgUrl,
            poseCat: this.state.poseCat,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };
  // handleNameEngChange = (event: any) => {
  //     this.setState({
  //         Pose: {
  //             ...this.state.Pose,
  //             nameEng: event.target.value
  //         }
  //     })
  // };
  // handlePasswordChange = (event: any) => {
  //     const password = event.target.value;
  //     this.setState({ password: password })
  // };

  render() {
    return (
      <div>
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
              onChange={(e) => {
                this.setState({ nameEng: e.target.value });
              }}
            />
            <TextField
              id="standard-basic"
              label="Pose Name in Sanskrit"
              type="text"
              onChange={(e) => {
                this.setState({ nameSans: e.target.value });
              }}
            />
            <TextField
              id="standard-basic"
              label="Image Url"
              type="text"
              onChange={(e) => {
                this.setState({ imgUrl: e.target.value });
              }}
            />
            <TextField
              id="standard-basic"
              label="Pose Categories"
              type="text"
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
