import React from 'react';

import { Container } from './styles';
import Navbar from '~/components/navbar';
import DetailsClient from '~/components/detailsClient';

export default function Clientes() {
    return (
        <>
            <Navbar />
            <Container>
                <DetailsClient />
            </Container>
        </>
    );
}
