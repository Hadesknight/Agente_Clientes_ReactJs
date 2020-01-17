import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { MainContainer, ImgAvatar, Form, ButtonSubmit, Footer } from './styles';

export default function SignIn() {
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
                />
                <ButtonSubmit
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
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
                <p>
                    Developed by{' '}
                    <Link
                        color="inherit"
                        href="https://www.linkedin.com/in/fernando-santos-686632122/"
                    >
                        Fernando Santos
                    </Link>{' '}
                </p>
                {new Date().getFullYear()}.
            </Footer>
        </MainContainer>
    );
}
