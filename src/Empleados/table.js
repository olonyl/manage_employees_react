import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Edit from './edit';

const styles = (theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    }
});

class PersonTable extends Component {

    state = {
        editOpen: false
    }

    constructor(props) {
        super(props);
    }

    handleEditModal = (val) => {
        this.setState({
            editOpen: val
        })
    }

    render() {
        const { classes, data } = this.props;

        return <div className="card-body">
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Actions</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell >Apellido</TableCell>
                            <TableCell >Correo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow key={row.Id}>
                                <TableCell >
                                    <button className="btn " type="button" onClick={() => this.handleEditModal(true)}> <i className="fas fa-pencil-alt"></i></button>
                                </TableCell>
                                <TableCell >{row.Nombre}</TableCell>
                                <TableCell >{row.Apellido}</TableCell>
                                <TableCell >{row.Correo}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Edit isOpen={this.state.editOpen} handleEditModal={() => this.handleEditModal(false)} />
        </div>
    }
}

export default withStyles(styles)(PersonTable);