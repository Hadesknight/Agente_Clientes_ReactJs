import React from 'react';
import { useDispatch } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import history from '~/services/history';

import { signOut } from '~/store/modules/auth/actions';
import { Icon, Logout, Header, Back } from './styles';

export default function Navbar({ button }) {
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

                {button ? (
                    <Back color="#fff" onClick={() => history.push('/')}>
                        Voltar
                    </Back>
                ) : (
                        <Logout color="#fff" onClick={() => handleLogout()}>
                            Sair
                    </Logout>
                    )}
            </Header>
        </AppBar>
    );
}
