import { colors } from 'styles/theme';

const textColor = colors.contrast;

const error = { border: `1px solid ${colors.error}`, color: textColor, background: colors.error };
const warning = { border: `1px solid ${colors.warning}`, color: textColor, background: colors.warning };
const info = { border: `1px solid ${colors.info}`, color: textColor, background: colors.info };
const success = { border: `1px solid ${colors.success}`, color: textColor, background: colors.success };
const initial = { border: '1px solid black', color: colors.primary, background: colors.contrast };

export const getSeverityStyle = (key) => {
    switch (key) {
        case 'error':
            return error;
        case 'info':
            return info;
        case 'success':
            return success;
        case 'warning':
            return warning;
        default:
            return initial;
    }
};
export const styles = {
    snackbar: {
        padding: 10,
        border: `1px solid ${colors.primary}`,
        backgroundColor: 'white',
        borderRadius: 6,
        minWidth: 300,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 500,
        letterSpacing: 1,
        zIndex: 1000,
        margin: 10
    }
};
