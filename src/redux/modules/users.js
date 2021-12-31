import { fetchUsers } from 'services/users';
import { add as addSnackbar } from './snackbar';

const LOAD = 'users/LOAD';
const RESET = 'users/RESET';
const ADD_ONE = 'users/ADD_ONE';
const ERROR = 'users/ERROR';
const LOADING = 'users/LOADING';

const initialState = {
    users: [],
    isLoading: false
};

export default function reducer(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case LOADING:
            return { ...state, isLoading: true };
        case LOAD:
            return { ...state, users: payload, isLoading: false, error: false };
        case RESET:
            return { ...state, users: [], isLoading: false, error: false };
        case ADD_ONE:
            return { ...state, users: [ ...state.users, ...payload ], isLoading: false, error: false };
        case ERROR:
            return { ...state, isLoading: false, error: true };
        default:
            return state;
    }
}

export function loadUsers(users) {
    return { type: LOAD, payload: users };
}
export function addOne(user) {
    return { type: ADD_ONE, payload: user };
}
export function reset() {
    return { type: RESET };
}
export function error() {
    return { type: ERROR };
}
export function loading() {
    return { type: LOADING };
}

export const getUsers = () => (dispatch) => {
    dispatch(loading());
    dispatch(
        addSnackbar({
            message: 'Started fetching users from server',
            severity: 'info'
        })
    );
    fetchUsers()
        .then((result) => {
            dispatch(
                addSnackbar({
                    message: 'Users loading succeed',
                    severity: 'success'
                })
            );
            dispatch(loadUsers(result.results));
        })
        .catch((e) => {
            dispatch(error());
            dispatch(
                addSnackbar({
                    message: 'Fetching users failed',
                    severity: 'error'
                })
            );
        });
};
export const resetUsers = () => (dispatch) => {
    dispatch(reset());
    dispatch(
        addSnackbar({
            message: 'Users list successfully wiped',
            severity: 'success'
        })
    );
};
export const getOneUser = () => (dispatch) => {
    dispatch(loading());
    dispatch(
        addSnackbar({
            message: 'Started fetching user from server',
            severity: 'info'
        })
    );
    fetchUsers(1)
        .then((result) => {
            dispatch(
                addSnackbar({
                    message: 'User loading succeed',
                    severity: 'success'
                })
            );
            dispatch(addOne(result.results));
        })
        .catch((e) => {
            dispatch(error());
            dispatch(
                addSnackbar({
                    message: 'Fetching user failed',
                    severity: 'error'
                })
            );
        });
};

export const selectUsers = (state) => state.users.users || [];
