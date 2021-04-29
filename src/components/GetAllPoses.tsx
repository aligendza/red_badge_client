import React, { Component } from 'react';
import APIURL from '../helpers/environment';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';
// import { Button, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
// import { YogaPose } from '../Interfaces';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import CardItemDisplay from './PoseCard'
import ViewPose from "./ViewPoses"

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

type styleState= {
    style: any,
    index: any
}

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             width: '100%',
//             height: 400,
//             maxWidth: 300,
//             backgroundColor: theme.palette.background.paper,
//         },
//     }),
// );

class renderRow extends Component<ListChildComponentProps, styleState> {
    constructor(props: ListChildComponentProps) {
        super(props);
        this.state={
            index:this.props.index,
            style:this.props.style
        }
    }

render(){
    return (
        <ListItem button style={this.state.style} key={this.state.index}>
            <ListItemText primary={`Item ${this.state.index + 1}`} />
        </ListItem>
    );
    }
}

export default class GetAllPoses extends Component<AcceptedProps, PoseDataState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            id: 0,
            nameEng: '',
            nameSans: '',
            imgUrl: '',
            poseCat: '',
            poses: []
        }
    };
    token: string | null = localStorage.getItem("token");

    handleSubmit = () => {

        if (this.props.sessionToken) {
            // e.preventDefault();
            // fetch("http://localhost:3000/pose/create", {
                console.log (APIURL,this.props.sessionToken,this.token, this.state.id, this.state.nameEng, this.state.nameSans, this.state.imgUrl, this.state.poseCat);
            fetch(`${APIURL}/pose/`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: this.props.sessionToken,
                }),
                // body: JSON.stringify({
                    // pose: {
                    // id: this.state.id,
                    // nameEng: this.state.nameEng,
                    // nameSans: this.state.nameSans,
                    // imgUrl: this.state.imgUrl,
                    // poseCat: this.state.poseCat,
                    // }
                // }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, this.props.sessionToken, this.token);
                    this.setState({poses: data})
                })
                .catch((err) => console.log(err));
        }
    };
    // classes = useStyles();
    componentDidMount(){
        this.handleSubmit()
    }

    render() {
        return (
            <div 
            // className={this.classes.root}>
                >
                <h2>All My Poses</h2>
                <ViewPose sessionToken={this.props.sessionToken} poses={this.state.poses} />
                {/* <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
                    {renderRow}
                </FixedSizeList>
                <br />
                <Button variant='contained' onClick={this.handleSubmit}>
                    Get All My Poses
                    </Button> */}

            </div>
        )
    }
}
// export default function VirtualizedList() {
    // const classes = useStyles();

//     return (
//       <div className={classes.root}>
{/* <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
    {renderRow}
</FixedSizeList> */}
//       </div>
//     );
//   }

// export default CreatePose;
// npm install --legacy-peer-deps
