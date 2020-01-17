import React from 'react';

import { Container } from './styles';
import Navbar from '~/components/navbar';
import CreateClient from '~/components/createClients';

export default function CreateClients() {
    return (
        <>
            <Navbar />
            <Container>
                <CreateClient />
            </Container>
        </>
    );
}
