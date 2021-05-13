import React, { Component, FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import { YogaPose } from "../../Interfaces";
import {
  Container,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";

type PoseDataState = {
  id: number;
  nameEng: string;
  nameSans: string;
  imgUrl: string;
  poseCat: string;
};

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MediaCard() {
//   const classes = useStyles();

let poseDisplay: YogaPose;

const StyledCard = withStyles({
  root: {
    maxWidth: 330,
  },
})(Card);

const StyledCardMedia = withStyles({
  root: {
    height: 400,
  },
})(CardMedia);
const CardItemsDisplay: FunctionComponent<PoseDataState> = (props) => {
  return (
    <Container key={props.id}>
      <Card>
        <CardActionArea>
          <CardMedia image={props.imgUrl} title={props.nameEng} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Delete
          </Button>
          <Button size="small" color="primary">
            Edit Pose
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
export default CardItemsDisplay;
