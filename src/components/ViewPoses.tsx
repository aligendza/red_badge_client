import React, {Component} from "react"
import PoseCard from "./PoseCard"
import PosesCard from "./PosesCard"

type acceptedProps = {
    sessionToken: any;
    poses: []
}

export default class ViewPose extends Component<acceptedProps, {}> {
    constructor(props: acceptedProps) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {this.props.poses.map((pose, index) => (
                    <PosesCard sessionToken={this.props.sessionToken} pose={pose} index={index} />
                ))}
            </div>
        )
    }
}