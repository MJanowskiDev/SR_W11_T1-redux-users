import { fetchUsers } from 'services/users';

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
    fetchUsers().then((result) => dispatch(loadUsers(result.results))).catch((e) => dispatch(error()));
};
export const resetUsers = () => (dispatch) => {
    dispatch(reset());
};
export const getOneUser = () => (dispatch) => {
    dispatch(loading());
    fetchUsers(1).then((result) => dispatch(addOne(result.results))).catch((e) => dispatch(error()));
};
