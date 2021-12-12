import { sendContactForm } from 'services/contact';
import { addSnackbar } from './snackbar';
const SEND = 'contact/SEND';
const SUCCESS = 'contact/SUCCESS';
const ERROR = 'contact/ERROR';

const initialState = {
    sending: false,
    error: false,
    sent: false
};

export default function reducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case SEND:
            return { ...state, sent: false, sending: true, error: false };
        case SUCCESS:
            return { ...state, sent: true, sending: false, error: false };
        case ERROR:
            return { ...state, sent: false, sending: false, error: true };
        default:
            return state;
    }
}

export function send() {
    return { type: SEND };
}

export function success() {
    return { type: SUCCESS };
}

export function error() {
    return { type: ERROR };
}

export const sendForm = (form) => (dispatch) => {
    dispatch(send());
    sendContactForm(form)
        .then((res) => {
            if (res.ok) {
                dispatch(success());
                dispatch(addSnackbar({ message: 'Message successfully sent', severity: 'success' }));
            } else {
                dispatch(error());
                dispatch(addSnackbar({ message: 'Error sending the message', severity: 'error' }));
            }
        })
        .catch((e) => dispatch(error()));
};
