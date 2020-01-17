import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export const MainContainer = styled(Container)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 75px;
`;

export const ImgAvatar = styled(Avatar)`
    background: #2c339c !important;
    margin: 10px auto;
`;

export const Form = styled.form`
    margin: 15px auto;
    width: 330px;
`;

export const ButtonSubmit = styled(Button)`
    margin: 20px auto !important;
`;

export const Footer = styled(Typography)`
    margin-top: 65px !important;
`;
