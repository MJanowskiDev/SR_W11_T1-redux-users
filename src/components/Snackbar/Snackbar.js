import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { removeSnackbar } from 'redux/modules/snackbar';
import { styles, getSeverityStyle } from './styles';

import CloseButton from './CloseButton';

const Snackbar = ({ id, message, autoHideDuration = 5000, severity, removeSnackbar }) => {
    const handleOnClose = useCallback(
        () => {
            removeSnackbar(id);
        },
        [ id, removeSnackbar ]
    );

    useEffect(
        () => {
            const autoHideTimeout = setTimeout(() => handleOnClose(), autoHideDuration);
            return () => {
                clearTimeout(autoHideTimeout);
            };
        },
        [ autoHideDuration, handleOnClose ]
    );

    return (
        <div style={{ ...styles.snackbar, ...getSeverityStyle(severity) }}>
            <div>{message}</div>
            <CloseButton style={{ ...getSeverityStyle(severity), border: 'unset' }} onClick={handleOnClose} />
        </div>
    );
};
const mapDispatchToProps = { removeSnackbar };
export default connect(null, mapDispatchToProps)(Snackbar);
