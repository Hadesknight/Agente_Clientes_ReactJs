import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import api from '~/services/api';

import { Wrapper, Title, SubTitle, Border, Address } from './styles';

export default function DetailsClient({ id }) {
    const [client, setClient] = useState({});

    useEffect(() => {
        async function loadClientes() {
            try {
                const response = await api.get(`/clients/${id}`);

                setClient(response.data);
            } catch (err) {
                console.log(err);
            }
        }

        loadClientes();
    }, [id]);

    return (
        <Container maxWidth="sm">
            <Wrapper>
                <h1>Dados Pessoais</h1>
                <Title>{client.name}</Title>
                <SubTitle>{client.profession}</SubTitle>
                <SubTitle>{client.email}</SubTitle>
                <SubTitle>Cpf: {client.cpf}</SubTitle>
                <SubTitle>Cel: {client.telephone}</SubTitle>
                <Border />
                <h1>Endereço</h1>

                <Address>
                    {client.street}
                    <spam>{client.number}</spam>
                </Address>
                <Address>Bairro: {client.district}</Address>
                <Address>
                    {client.city} <Address>- {client.state}</Address>
                </Address>
                <Address>Cep: {client.cep}</Address>
            </Wrapper>
        </Container>
    );
}
