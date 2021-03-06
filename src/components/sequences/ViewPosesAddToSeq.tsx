import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

type acceptedProps = {
  sessionToken: any;
  // pose: any;
  // index: any;
  nameEng: string;
};

export default class ViewPosesAddToSeq extends Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {};
    // console.log(this.props.pose);
  }
  render() {
    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              //   image={props.imgUrl}
              title={this.props.nameEng}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {/* Lizard */}
                {this.props.nameEng}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add This Pose
            </Button>
            {/* <Button size="small" color="primary">
              Edit Pose
            </Button> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}
