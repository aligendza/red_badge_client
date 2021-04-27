import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from "react-router-dom";
import SwitchController from "./SwitchController";
type AcceptedProps = {
    updateToken: (newToken: string) => void;
    updateRole: (newUserIsAdmin: string) => void;
    clearToken: () => void;
    sessionToken: any;
};

type ValueTypes = {
    anchorEl: any;
}

export class Navbar extends Component<AcceptedProps, ValueTypes> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            anchorEl: null
        };
        console.log(props);
    }

    // export default function SimpleMenu() {
    // [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        return (
            <div>
                <div>
                    <Button aria-controls="Poses" aria-haspopup="true" onClick={this.handleClick}>
                        Open Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Create a Pose</MenuItem>
                        <MenuItem onClick={this.handleClose}>Edit a Pose</MenuItem>
                        <MenuItem onClick={this.handleClose}>Delete a Pose</MenuItem>
                        <MenuItem onClick={this.handleClose}>Get All Poses</MenuItem>
                    </Menu>
                </div>
            </div>
        );
    }
}
