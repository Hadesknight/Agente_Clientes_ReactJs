import React from 'react';

import { Container } from './styles';
import Navbar from '~/components/navbar';
import CreateClient from '~/components/createClients';

export default function CreateClients({ match }) {
    return (
        <>
            <Navbar button="true" />
            <Container>
                <CreateClient id={match.params.id} />
            </Container>
        </>
    );
}
