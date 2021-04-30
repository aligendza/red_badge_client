import React, { Component } from "react";
import APIURL from "../helpers/environment";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";

type AcceptedProps = {
  // updateToken: (newToken: string) => void;  // string | null
  sessionToken: any;
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

type styleState = {
  style: any;
  index: any;
};

type AllSequencesData = {
  sequences: any;
  //   title: string;
  //   style: any;
};

// class renderRow extends Component<ListChildComponentProps, AllSequencesData> {
//   constructor(props: ListChildComponentProps) {
//     super(props);
//     this.state = {
//       sequenceId: this.props.index,
//       //   style: this.props.style,
//       //   title: this.props.title,
//     };
//   }

//   render() {
//     return (
//       <ListItem button style={this.state.style} key={this.state.sequenceId}>
//         <ListItemText primary={`Item ${this.state.sequenceId + 1}`} />
//         <Button variant="contained" onClick={this.handleSubmit}>
//           Add Poses to Sequence
//         </Button>
//       </ListItem>
//     );
//   }
// }

export default class GetAllSequences extends Component<
  AcceptedProps,
  //   PoseDataState
  AllSequencesData
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      sequences: [],
      //   title: "",
    };
  }
  token: string | null = localStorage.getItem("token");

  getAllSequences = () => {
    if (this.props.sessionToken) {
      // e.preventDefault();
      // fetch("http://localhost:3000/pose/create", {
      console.log(APIURL, this.props.sessionToken, this.token);
      fetch(`${APIURL}/sequence/`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, this.props.sessionToken, this.token);
          this.setState({ sequences: data });
        })
        .catch((err) => console.log(err));
    }
  };
  // classes = useStyles();
  componentDidMount() {
    this.getAllSequences();
  }

  render() {
    return (
      <div>
        <h2>All My Sequences</h2>
        {this.state.sequences.map((sequence: any) => {
          <div>
            <h1>{sequence.title}</h1>
            <Button variant="contained">
              {/* onClick={this.} */}
              Add Poses to Sequence
            </Button>
          </div>;
        })}

        <br />
        {/* {this.props.sequ.map((pose, index) => (
       title: string
        ))} */}
      </div>
    );
  }
}
