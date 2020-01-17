import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import axios from 'axios';
import history from '~/services/history';
import api from '~/services/api';

import {
    Tittle,
    Border,
    Form,
    InputFull,
    MailInput,
    PhoneInput,
    CpfInput,
    ProfessionInput,
    BirthInput,
    DivCep,
    CepInput,
    BotoesControll,
} from './styles';

export default function DetailsClient() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [cpf, setCpf] = useState('');
    const [profession, setProfession] = useState('');
    const [birth_date, setBirth_date] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState();
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [cep, setCep] = useState('');
    const [cepError, setCepError] = useState(false);
    const [errorCreate, setErrorCreate] = useState(false);

    const payload = {
        name,
        email,
        telephone,
        cpf,
        profession,
        birth_date,
        street,
        number,
        district,
        city,
        state,
        cep,
    };

    async function SeachCep() {
        try {
            const response = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            );

            setCity(response.data.localidade);
            setStreet(response.data.logradouro);
            setDistrict(response.data.bairro);
            setState(response.data.uf);
            setCepError(false);
        } catch (err) {
            setCepError(true);
            setCity('');
            setStreet('');
            setDistrict('');
            setState('');
        }
    }

    async function CreateClient() {
        try {
            const createClient = await api.post('/clients', { payload });
            console.log(createClient);
        } catch (err) {
            setErrorCreate(true);
        }
    }

    return (
        <Container>
            <Tittle>
                <h1>Cadastrar Clientes</h1>
            </Tittle>
            <Border />

            <Form type="submit">
                <h3>Dados Pessoais</h3>
                <InputFull
                    required
                    id="standard-required"
                    label="Nome"
                    value={name}
                    autoFocus
                    onChange={e => setName(e.target.value)}
                />

                <div>
                    <MailInput
                        required
                        id="standard-required"
                        label="email"
                        defaultValue={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <PhoneInput
                        required
                        id="standard-required"
                        label="Telefone (00) 0000-0000"
                        defaultValue={telephone}
                        onChange={e => setTelephone(e.target.value)}
                    />
                    <CpfInput
                        required
                        id="standard-required"
                        label="Cpf 000.000.000-00"
                        defaultValue={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                </div>
                <div>
                    <ProfessionInput
                        required
                        id="standard-required"
                        label="Profissão"
                        defaultValue={profession}
                        onChange={e => setProfession(e.target.value)}
                    />
                    <BirthInput
                        required
                        id="standard-required"
                        label="Nascimento Ano-Mes-Dia"
                        defaultValue={birth_date}
                        onChange={e => setBirth_date(e.target.value)}
                    />
                </div>

                <Border />
                <h3>Endereço</h3>

                <DivCep>
                    <CepInput
                        required
                        id="standard-required"
                        label="Cep Somente Numeros"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        error={cepError}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => SeachCep()}
                    >
                        Buscar
                    </Button>
                </DivCep>
                <InputFull
                    required
                    id="standard-required"
                    label="Endereço - Logradouro"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                />

                <div>
                    <MailInput
                        required
                        id="standard-required"
                        label="Numero"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                    <PhoneInput
                        required
                        id="standard-required"
                        label="Bairro"
                        value={district}
                        onChange={e => setDistrict(e.target.value)}
                    />
                    <CpfInput
                        required
                        id="standard-required"
                        label="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <ProfessionInput
                        required
                        id="standard-required"
                        label="Estado - UF"
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                    <BirthInput
                        required
                        id="standard-required"
                        label="País"
                        defaultValue="Brasil"
                    />
                </div>
            </Form>

            <Border />

            <BotoesControll>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => CreateClient()}
                >
                    Cadastrar
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push('/')}
                >
                    Voltar
                </Button>
            </BotoesControll>
        </Container>
    );
}
