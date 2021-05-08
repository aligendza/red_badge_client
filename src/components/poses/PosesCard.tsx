import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import APIURL from "../../helpers/environment";

type AcceptedProps = {
  sessionToken: any;
  pose: any;
  getAllPoses: any;
};

type PoseDataState = {
  id: number;
  nameEng: string;
  nameSans: string;
  imgUrl: string;
  poseCat: string;
  poses: [];
};

// export class DeletePose extends Component<AcceptedProps, PoseDataState> {
//   constructor(props: AcceptedProps) {
//     super(props);
//     this.state = {
//       id: 0,
//       nameEng: "",
//       nameSans: "",
//       imgUrl: "",
//       poseCat: "",
//       poses: [],
//     };
//   }

//   poseDelete = (e: any) => {
//     if (this.props.sessionToken) {
//       e.preventDefault();
//       // fetch("http://localhost:3000/user/login", {
//       fetch(`${APIURL}/pose/delete/${this.props.pose.id}`, {
//         method: "DELETE",
//         headers: new Headers({
//           "Content-Type": "application/json",
//           Authorization: this.props.sessionToken,
//         }),
//       }).then(() => {
//         console.log("Deleted Successfully");
//         this.poseDelete(e);
//       });
//     }
//   };
// }
export default class PosesCard extends Component<AcceptedProps, {}> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {};
    console.log(this.props.pose);
  }
  poseDelete = (e: any) => {
    if (this.props.sessionToken) {
      e.preventDefault();
      // fetch("http://localhost:3000/user/login", {
      fetch(`${APIURL}/pose/delete/${this.props.pose.id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      }).then(() => {
        console.log("Deleted Successfully");
        this.props.getAllPoses();
      });
    }
  };
  render() {
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              //   image={props.imgUrl}
              title={this.props.pose.nameEng}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {/* Lizard */}
                {this.props.pose.nameEng}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={this.poseDelete}>
              Delete
            </Button>
            <Button size="small" color="primary">
              Edit Pose
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
