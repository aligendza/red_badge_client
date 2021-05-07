import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "../auth/Auth";
import CreatePose from "../components/poses/CreatePose";
import GetAllPoses from "../components/poses/GetAllPoses";
import CreateSequenceName from "../components/sequences/CreateSequenceName";
import SequencesListAddPose from "../components/sequences/SequencesListAddPose";
import SequencesListDeletePose from "../components/sequences/SequencesListDeletePose";

type ControllerProps = {
  updateToken: (newToken: string) => void; // currently a function to update token, should be token itself IN CREATE POSE for auth
  updateUserRole: (newUserRole: string) => void;
  sessionToken: any;
  nameEng: string;
  // nameSans: string;
  // imgUrl: string;
  // poseCat: string;
  // poseId: number;
  // sequenceId: number;
  // owner: number;
  // title: string;
  // posesInSequence: any;
  // pose: any;
  // index: any;
};

const SwitchController: FC<ControllerProps> = (props) => {
  console.log("switchController: ", props.sessionToken);

  return (
    <div>
      <Switch>
        <Route exact path="/auth">
          <Auth
            updateToken={props.updateToken}
            updateRole={props.updateUserRole}
          ></Auth>
        </Route>
        <Route exact path="/components/poses/CreatePose">
          <CreatePose sessionToken={props.sessionToken} />
        </Route>
        <Route exact path="/components/poses/GetAllPoses">
          <GetAllPoses sessionToken={props.sessionToken} />
        </Route>
        <Route exact path="/components/sequences/CreateSequenceName">
          <CreateSequenceName sessionToken={props.sessionToken} />
        </Route>
        <Route exact path="/components/sequences/SequencesListAddPose">
          <SequencesListAddPose sessionToken={props.sessionToken} />
        </Route>
        {/* <Route exact path="/components/sequences/AddPosesToASequence">
          <AddPosesToASequence
            // pose={props.pose}
            // index={props.index}
            sessionToken={props.sessionToken}
            nameEng={props.nameEng}
          />
        </Route> */}
        <Route exact path="/components/sequences/SequencesListDeletePose">
          <SequencesListDeletePose sessionToken={props.sessionToken} />
        </Route>
      </Switch>
    </div>
  );
};

export default SwitchController;
