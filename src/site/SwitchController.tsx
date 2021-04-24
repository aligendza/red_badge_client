import React, { FC } from 'react';
import { Switch, Route } from "react-router-dom";
import Auth from '../auth/Auth';
import CreatePose from "../components/CreatePose";


type ControllerProps = {
    updateToken: (newToken: string) => void; // currently a function to update token, should be token itself IN CREATE POSE for auth 
    updateUserRole: (newUserRole: string) => void;
    // nameEng: string;
    // nameSans: string;
    // imgUrl: string;
    // poseCat: string;
    // poseId: number;
    // sequenceId: number;
    // owner: number;
    // title: string;
    // posesInSequence: any;
};

const SwitchController: FC<ControllerProps> = (props) => {
    console.log('switchController: ', props.updateToken);

    return (
        <div>
            <Switch>
                <Route exact path='/auth'>
                    <Auth
                        updateToken={props.updateToken}
                        updateRole={props.updateUserRole}
                    ></Auth>
                </Route>
                <Route exact path='/components/CreatePose'>
                    <CreatePose updateToken={props.updateToken} />
                    </Route>
            </Switch>
        </div>
    )
}

export default SwitchController;