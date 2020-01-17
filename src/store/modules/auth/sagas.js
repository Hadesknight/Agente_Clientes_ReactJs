import { all, takeLatest, call, put } from 'redux-saga/effects';

import history from '~/services/history';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

function* signIn({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(api.post, '/sessions', { email, password });

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        yield put(signInSuccess(response.data.token));
    } catch (error) {
        yield put(signFailure());
    }
}

function* signUp({ payload }) {
    try {
        const { username, email, password, password_confirmation } = payload;

        yield call(api.post, '/users', {
            username,
            email,
            password,
            password_confirmation,
        });

        history.push('/login');
    } catch (err) {
        yield put(signFailure());
    }
}

function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('persist/REHYDRATE', setToken),
]);
