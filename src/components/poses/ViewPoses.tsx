import React, { Component } from "react";
import PoseCard from "../notUsed/PoseCard";
import PosesCard from "./PosesCard";

type ViewPosesProps = {
  sessionToken: any;
  poses: [];
};

export default class ViewPose extends Component<ViewPosesProps, {}> {
  constructor(props: ViewPosesProps) {
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
  render() {
    return (
      <div>
        {this.props.poses.map((pose, index) => (
          <PosesCard
            sessionToken={this.props.sessionToken}
            pose={pose}
            // index={index}
          />
        ))}
      </div>
    );
  }
}
