import React, { Component } from 'react';
import APIURL from '../helpers/environment';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';

type UserState = {
    email: string;
    password: string;
};

type AcceptedProps = {
    updateToken: (newToken: string) => void;
    updateRole: (newUserIsAdmin: string) => void;
};

export class Signup extends Component<AcceptedProps, UserState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = (e: any) => {
        if (
            this.state.email !== '' &&
            this.state.password !== ''
        ) {
            e.preventDefault();
            // fetch("http://localhost:3000/user/signup", {
            fetch(`${APIURL}/user/signup`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify({
                    user:{
                    email: this.state.email,
                    password: this.state.password,
                }}),
                
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.props.updateToken(data.sessionToken);
                });
        } else {
            alert('Email and Password required');
        }
    };
    handleEmailChange = (event: any) => {
        const email = event.target.value;
        this.setState({ email: email })
    };
    handlePasswordChange = (event: any) => {
        const password = event.target.value;
        this.setState({ password: password })
    };

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <ValidatorForm
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '30%',
                        display: 'block',
                        backgroundColor: '#FFFFFF',
                    }}
                    ref='form'
                    onSubmit={this.handleSubmit}
                    onError={(errors) => console.log(errors)}
                >
                    <TextValidator
                        label='Email'
                        onChange={(e) => this.handleEmailChange(e)}
                        name='email'
                        value={this.state.email}
                        validators={['isEmail', 'required']}
                        errorMessages={[
                            'email is not valid',
                            'this field is required'
                        ]}
                        autoComplete='off'
                    >
                    </TextValidator>
                    <TextValidator
                        label='Password'
                        onChange={this.handlePasswordChange}
                        name='password'
                        value={this.state.password}
                        type='password'
                        validators={['minStringLength:6', 'required']}
                        errorMessages={[
                            'password should be more than 5 letters',
                            'this field is required',
                        ]}>
                    </TextValidator>
                    <br />
                    <Button variant='contained' onClick={this.handleSubmit}>
                    Sign Up
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}