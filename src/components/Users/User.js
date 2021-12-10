import { colors } from 'styles/theme';
const styles = {
    container: {
        height: 32,
        display: 'flex',
        alignItems: 'center',
        padding: 8,
        textDecoration: 'none',
        color: colors.primary
    },
    odd: {
        background: colors.accent2
    },
    even: {
        background: colors.accent1
    }
};
const getStyleById = (id) => {
    if (id % 2 === 0) {
        return { ...styles.container, ...styles.even };
    } else {
        return { ...styles.container, ...styles.odd };
    }
};
const User = ({ user, id }) => {
    return (
        <span style={getStyleById(id)}>
            {user.name.first} {user.name.last}
        </span>
    );
};

export default User;
