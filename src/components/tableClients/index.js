import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import history from '~/services/history';
import api from '~/services/api';

import { ButtonDelete, ButtonCreate } from './styles';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#3F51B5',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

export default function TableClients() {
    const [client, setclient] = useState([]);

    async function loadClients() {
        const response = await api.get('clients');
        setclient(response.data);
    }

    useEffect(() => {
        loadClients();
    }, []);

    async function deleteClient(client_id) {
        await api.delete(`clients/${client_id}`);

        loadClients();
    }

    return (
        <>
            <ButtonCreate>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push('/clientes/create')}
                >
                    Novo
                </Button>
            </ButtonCreate>{' '}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell align="center">
                                Telefone
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Cpf
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Detalhes
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Deletar
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {client.map(row => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.telephone}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.cpf}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Link to={`/clientes/${row.id}`}>
                                        <AddCircleIcon color="primary" />
                                    </Link>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <ButtonDelete
                                        type="button"
                                        onClick={() => {
                                            deleteClient(row.id);
                                        }}
                                    >
                                        <DeleteForeverIcon color="primary" />
                                    </ButtonDelete>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
