import styled from 'styled-components';

import Toolbar from '@material-ui/core/Toolbar';
import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

export const Header = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
    }
`;

export const Icon = styled(Home)`
    margin-right: 15px;
`;

export const Logout = styled(Button)`
    color: #fff !important;
    font-size: 15px;
    font-weight: bold;
`;
