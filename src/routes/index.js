import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Clientes from '~/pages/Clientes';
import CreateClients from '~/pages/CreateClient';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} isPrivate />
            <Route path="/clientes" exact component={Clientes} isPrivate />
            <Route
                path="/clientes/create"
                component={CreateClients}
                isPrivate
            />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
        </Switch>
    );
}
