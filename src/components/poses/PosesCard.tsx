import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import APIURL from "../../helpers/environment";
import EditPoseModal from "./EditPoseModal";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Box from "@material-ui/core/Box";

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
export default class PosesCard extends Component<AcceptedProps, PoseDataState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      id: 0,
      nameEng: "",
      nameSans: "",
      imgUrl: "",
      poseCat: "",
      poses: [],
    };
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
        console.log(this.props.pose.id, "Deleted Successfully");
        this.props.getAllPoses();
      });
    }
  };
  // poseEdit = (e: any) => {
  //   if (this.props.sessionToken) {
  //     e.preventDefault();
  //     // fetch("http://localhost:3000/user/login", {
  //     fetch(`${APIURL}/pose/update/${this.props.pose.id}`, {
  //       method: "PUT",
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //         Authorization: this.props.sessionToken,
  //       }),
  //       body: JSON.stringify({
  //         // pose: {
  //         nameEng: this.state.nameEng,
  //         nameSans: this.state.nameSans,
  //         imgUrl: this.state.imgUrl,
  //         poseCat: this.state.poseCat,
  //         // }
  //       }),
  //     }).then(() => {
  //       console.log(this.props.pose.id, "Updated Successfully");
  //       this.props.getAllPoses();
  //     });
  //   }
  // };
  render() {
    return (
      // <div className="container-fluid padding">
      //   <div className="row padding">
      //     <div className="col-md-4">
      <div>
        <Container className="container-fluid padding">
          <Row className="justify-content-md-center">
            <Col className="col-md-4" id="card">
              <Box width={1 / 4} id="cpadding">
                <Card>
                  {/* {console.log(this.props.pose)} */}
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
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={this.poseDelete}
                    >
                      Delete
                    </Button>
                    <EditPoseModal
                      sessionToken={this.props.sessionToken}
                      poseId={this.props.pose.id}
                    ></EditPoseModal>
                    {/* <Button size="small" color="primary">
                Edit Pose
              </Button> */}
                  </CardActions>
                </Card>
                {/* <Button style={{ margin: "1rem 3rem" }}>
              <Link style={{ color: "#000000" }} to="/site/home">
                User Home
              </Link>
            </Button> */}
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
      //   </div>
      // </div>
    );
  }
}
