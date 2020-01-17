import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { signInRequest } from '~/store/modules/auth/actions';

import { MainContainer, ImgAvatar, Form, ButtonSubmit, Footer } from './styles';

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signInRequest(email, password));
    }

    return (
        <MainContainer>
            <ImgAvatar />
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
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
                    autoComplete="current-password"
                    onChange={e => setPassword(e.target.value)}
                />
                <ButtonSubmit
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={e => handleSubmit(e)}
                >
                    Sign In
                </ButtonSubmit>

                <Grid container>
                    <Grid item>
                        <Link href="/register" variant="body1">
                            Don't have an account? Sign Up
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
                </Link>
                {'  '}
                {new Date().getFullYear()}.
            </Footer>
        </MainContainer>
    );
}
