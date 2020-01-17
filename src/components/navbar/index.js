import React from 'react';
import { useDispatch } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';
import { signOut } from '~/store/modules/auth/actions';
import { Icon, Logout, Header } from './styles';

export default function Navbar() {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <AppBar position="relative">
            <Header>
                <div>
                    <Icon />
                    <Typography variant="h6" color="inherit" noWrap>
                        Agenda Clientes
                    </Typography>
                </div>
                <Logout color="#fff" onClick={() => handleLogout()}>
                    Sair
                </Logout>
            </Header>
        </AppBar>
    );
}
