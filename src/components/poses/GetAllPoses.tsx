import React, { Component } from "react";
import APIURL from "../../helpers/environment";
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from "@material-ui/core";
// import { Button, TextField } from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
// import { YogaPose } from '../Interfaces';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import CardItemDisplay from "../notUsed/PoseCard";
import ViewPose from "./ViewPoses";

type GetAllPosesProps = {
  // updateToken: (newToken: string) => void;  // string | null
  sessionToken: any;
  // updateRole: (newUserIsAdmin: string) => void;
  // YogaPose: [];
  getAllPoses: any;
};

type PoseDataState = {
  id: number;
  nameEng: string;
  nameSans?: string;
  imgUrl?: string;
  poseCat?: string;
  poses: [];
};

type styleState = {
  style: any;
  index: any;
};

// class renderRow extends Component<ListChildComponentProps, styleState> {
//   constructor(props: ListChildComponentProps) {
//     super(props);
//     this.state = {
//       index: this.props.index,
//       style: this.props.style,
//     };
//   }

//   render() {
//     return (
//       <ListItem button style={this.state.style} key={this.state.index}>
//         <ListItemText primary={`Item ${this.state.index + 1}`} />
//       </ListItem>
//     );
//   }
// }

export default class getAllPoses extends Component<
  GetAllPosesProps,
  PoseDataState
> {
  constructor(props: GetAllPosesProps) {
    super(props);
    this.state = {
      id: 0,
      nameEng: "",
      nameSans: "",
      imgUrl: "",
      poseCat: "",
      poses: [],
    };
  }
  token: string | null = localStorage.getItem("token");

  getAllPoses = () => {
    if (this.props.sessionToken) {
      // e.preventDefault();
      // fetch("http://localhost:3000/pose/create", {
      console.log(
        APIURL,
        this.props.sessionToken,
        this.token,
        this.state.id,
        this.state.nameEng,
        this.state.nameSans,
        this.state.imgUrl,
        this.state.poseCat
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
          console.log(data, this.props.sessionToken, this.token);
          this.setState({ poses: data });
        })
        .catch((err) => console.log(err));
    }
  };
  // classes = useStyles();
  componentDidMount() {
    this.getAllPoses();
  }

  render() {
    return (
      <div
      // className={this.classes.root}>
      >
        <div>
          <br></br>
          <h2 id="allposes">All My Poses</h2>
          <br></br>
        </div>
        <ViewPose
          sessionToken={this.props.sessionToken}
          poses={this.state.poses}
          getAllPoses={this.props.getAllPoses}
        />
        {/* <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
                    {renderRow}
                </FixedSizeList>
                <br />
                <Button variant='contained' onClick={this.handleSubmit}>
                    Get All My Poses
                    </Button> */}
      </div>
    );
  }
}
// export default function VirtualizedList() {
// const classes = useStyles();

//     return (
//       <div className={classes.root}>
{
  /* <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
    {renderRow}
</FixedSizeList> */
}
//       </div>
//     );
//   }

// export default CreatePose;
// npm install --legacy-peer-deps
