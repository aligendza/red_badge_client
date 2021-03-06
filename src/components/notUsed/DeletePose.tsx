import React, { Component } from "react";
import APIURL from "../../helpers/environment";
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, FormControl, TextField } from "@material-ui/core";
// import { YogaPose } from '../Interfaces';

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
};
export class DeletePose extends Component<AcceptedProps, PoseDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      id: 0,
      nameEng: "",
      nameSans: "",
      imgUrl: "",
      poseCat: "",
    };
  }

  poseDelete = (e: any) => {
    if (this.props.Token) {
      e.preventDefault();
      // fetch("http://localhost:3000/user/login", {
      fetch(`${APIURL}//delete/:id`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.Token,
        }),
      }).then(() => {
        console.log("Deleted Successfully");
        this.poseDelete(e);
      });
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
        <h2>Edit a pose</h2>
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
        <Button variant="contained" onClick={this.poseDelete}>
          Edit
        </Button>
      </div>
    );
  }
}
