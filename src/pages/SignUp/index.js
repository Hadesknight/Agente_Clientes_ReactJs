import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { signUpRequest } from '~/store/modules/auth/actions';

import { MainContainer, ImgAvatar, Form, ButtonSubmit, Footer } from './styles';

export default function SignIn() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password_confirmation, setPassword_confirmation] = useState();

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const payload = { username, email, password, password_confirmation };
        dispatch(signUpRequest(payload));
    }

    return (
        <MainContainer>
            <ImgAvatar />
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <Form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password_confirmation"
                    label="Confirm Password"
                    type="password"
                    id="password_confirmation"
                    onChange={e => setPassword_confirmation(e.target.value)}
                />
                <ButtonSubmit
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={e => handleSubmit(e)}
                >
                    Sign Up
                </ButtonSubmit>

                <Grid container>
                    <Grid item>
                        <Link href="/login" variant="body1">
                            Already have an account? sign in
                        </Link>
                    </Grid>
                </Grid>
            </Form>
            <Footer variant="body2" color="textSecondary" align="center">
                Developed by{' '}
                <Link
                    color="inherit"
                    href="https://www.linkedin.com/in/fernando-santos-686632122/"
                >
                    Fernando Santos
                </Link>{' '}
                {new Date().getFullYear()}.
            </Footer>
        </MainContainer>
    );
}
