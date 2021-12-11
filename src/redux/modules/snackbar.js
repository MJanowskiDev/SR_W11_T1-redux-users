import { v4 as uuidv4 } from 'uuid';
const ADD = 'snackbar/ADD';
const REMOVE = 'snackbar/REMOVE';

const initialState = {
    snackbars: []
};

export default function reducer(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case ADD:
            return { ...state, snackbars: [ ...state.snackbars, { id: uuidv4(), ...payload } ] };
        case REMOVE:
            return { ...state, snackbars: state.snackbars.filter((snack) => snack.id !== payload) };
        default:
            return state;
    }
}

export function add(snackbar) {
    return { type: ADD, payload: snackbar };
}

export function remove(id) {
    return { type: REMOVE, payload: id };
}

export const addSnackbar = (snackbar) => (dispatch) => {
    dispatch(add(snackbar));
};

export const removeSnackbar = (id) => (dispatch) => {
    dispatch(remove(id));
};
