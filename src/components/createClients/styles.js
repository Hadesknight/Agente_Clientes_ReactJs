import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

export const Tittle = styled.div`
    display: flex !important;
    justify-content: center !important;
`;

export const Border = styled.div`
    margin-top: 20px !important;
    border-bottom: 1px solid #eee !important;
`;

export const Form = styled.form`
    padding: 30px;
    margin: 0 30px;

    h3 {
        margin: 20px 0 30px 30px;
        color: #888;
    }
`;

export const InputFull = styled(TextField)`
    display: flex !important;
    margin: auto 0 !important;
`;

export const MailInput = styled(TextField)`
    margin: 30px 50px 20px 0 !important;
`;
export const PhoneInput = styled(TextField)`
    margin: 30px 60px 0 0 !important;
    width: 200px !important;
`;
export const CpfInput = styled(TextField)`
    margin: 30px 0 !important;
`;
export const ProfessionInput = styled(TextField)`
    margin: 20px 50px 20px 0 !important;
`;
export const BirthInput = styled(TextField)`
    margin: 20px 0 !important;
    width: 200px !important;
`;

export const DivCep = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 40px;
`;

export const CepInput = styled(TextField)`
    margin-right: 30px !important;
`;

export const BotoesControll = styled.div`
    display: flex !important;
    margin-bottom: 30px;
    justify-content: space-evenly;
`;
