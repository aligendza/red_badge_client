import React, { Component } from 'react';
import APIURL from '../helpers/environment';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';
// import { Button, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
// import { YogaPose } from '../Interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  };

  const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toFixed(2),
    },
  ];

  interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
  }
  
  function createData(name: string, code: string, population: number, size: number): Data {
    const density = population / size;
    return { name, code, population, size, density };
  }

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
        }
    };
    token: string | null = localStorage.getItem("token");

    handleSubmit = (e: any) => {

        if (this.props.sessionToken) {
            e.preventDefault();
            // fetch("http://localhost:3000/pose/create", {
            fetch(`${APIURL}/`, {
                method: 'GET',
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
                <h2>All My Poses</h2>
                <TableContainer>/
                    <Table>/
                        <TableHead>/
                            <TableRow>
                                <TableCell>
                                ID  
                                </TableCell>
                                <TableCell>
                                Name in English  
                                </TableCell>
                                <TableCell>
                                Name in Sans 
                                </TableCell>
                                <TableCell>
                                Image URL 
                                </TableCell>  <TableCell>
                                Pose Categories
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <br />
                <Button variant='contained' onClick={this.handleSubmit}>
                    Get All My Poses
                    </Button>

            </div>
        )
    }
}
// export default CreatePose;
// npm install --legacy-peer-deps
