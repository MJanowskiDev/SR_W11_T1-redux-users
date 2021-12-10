import { colors } from 'styles/theme';
const styles = {
    button: {
        borderRadius: 6,
        padding: 8,
        minWidth: 75,
        margin: 4,
        letterSpacing: 1,
        color: colors.primary,
        fontWeight: 700
    }
};
const Button = ({ children, onClick }) => {
    return (
        <button style={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
