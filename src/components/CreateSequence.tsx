import React, { Component } from 'react';
import APIURL from '../helpers/environment';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
// import { YogaPose } from '../Interfaces';

type AcceptedProps = {
    // updateToken: (newToken: string) => void;  // string | null 
    sessionToken: any
    // updateRole: (newUserIsAdmin: string) => void;
    // YogaPose: [];
};

type PoseDataState = {
    id: number;
    nameEng: string;
    nameSans: string;
    imgUrl: string;
    poseCat: string;
    poses: []
}

type SequenceDataState = {
    // owner: number,
    title: string,
    posesInSequence: any,
    // sequenceId: number,
    poseId: number
}

export class CreateSequence extends Component<AcceptedProps, SequenceDataState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            // owner: 0,
            title: '',
            posesInSequence: '',
            sequenceId: 0,
            poseId: 0,
        }
    };
    token: string | null = localStorage.getItem("token");

    handleSubmit = (e: any) => {

        if (this.props.sessionToken) {
            e.preventDefault();
            // fetch("http://localhost:3000/pose/create", {
            fetch(`${APIURL}/sequence/create`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: this.props.sessionToken, 
                }),
                body: JSON.stringify({
                    // pose: {
                        id: this.state.id,
                        nameEng: this.state.nameEng,
                        nameSans: this.state.nameSans,
                        imgUrl: this.state.imgUrl,
                        poseCat: this.state.poseCat,
                    // }
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, this.props.sessionToken, this.token);
                })
                .catch((err) => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <h2>Create a Sequence</h2>
                <FormControl>
                    <TextField
                        id="standard-basic"
                        label="Sequence Name"
                        type="text"
                        onChange={(e) => {
                            this.setState({ title: e.target.value });
                        }}
                    />
                </FormControl>
                <br />
                <Button variant='contained' onClick={this.handleSubmit}>
                    Create
                    </Button>

            </div>
        )
    }
}
export default CreatePose;