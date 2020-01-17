import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Clientes from '~/pages/Clientes';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} isPrivate />
            <Route path="/clientes" component={Clientes} isPrivate />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
        </Switch>
    );
}
