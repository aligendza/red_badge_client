import GetAllPoses from "../poses/GetAllPoses";
import React, { Component } from "react";
import APIURL from "../../helpers/environment";
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
// import { YogaPose } from '../Interfaces';
import ViewPosesAddToSeq from "../sequences/ViewPosesAddToSeq";

type AcceptedProps = {
  // updateToken: (newToken: string) => void;  // string | null
  sessionToken: any;
  // updateRole: (newUserIsAdmin: string) => void;
  // YogaPose: [];
  // pose: any;
  // index: any;
  nameEng: string;
};

type PoseDataState = {
  id: number;
  nameEng: string;
  nameSans: string;
  imgUrl: string;
  poseCat: string;
  poses: [];
};

type SequenceDataState = {
  title: string;
  posesInSequence: any;
  nameEng: string;
};

export default class AddPoseToSequence extends Component<
  AcceptedProps,
  SequenceDataState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      title: "",
      posesInSequence: "",
      nameEng: "",
    };
  }
  token: string | null = localStorage.getItem("token");

  handleSubmit = (e: any) => {
    if (this.props.sessionToken) {
      e.preventDefault();
      // fetch("http://localhost:3000/pose/create", {
      fetch(`${APIURL}/sequence/addpose/:sequenceId/:posesId`, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
        body: JSON.stringify({
          title: this.state.title,
          posesInSequence: this.state.posesInSequence,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, this.props.sessionToken, this.token);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <h2>Add Pose to Sequence</h2>
        <ViewPosesAddToSeq
          sessionToken={this.props.sessionToken}
          // pose={this.props.pose}
          // index={this.props.index}
          nameEng={this.props.nameEng}
        />

        {/* <FormControl>
          <TextField
            id="standard-basic"
            label="Sequence Name"
            type="text"
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
        </FormControl> */}

        {/* <Button variant='contained' onClick={this.handleSubmit}>
                    Add This Pose to Sequence
                    </Button> */}
      </div>
    );
  }
}
