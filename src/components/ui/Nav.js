import { NavLink } from 'react-router-dom';
import { colors } from 'styles/theme';

const styles = {
    nav: {
        padding: '16px 32px',
        background: colors.primary,
        display: 'flex',
        width: '100vw',
        gap: 32,
        fontSize: '1.6em'
    },
    link: {
        textDecoration: 'none'
    },
    linkActive: {
        color: colors.secondary,
        textDecoration: `underline ${colors.secondary}`
    },
    linkInactive: {
        color: 'white'
    }
};

const getActiveStyle = (isActive) => {
    return { ...styles.link, ...(isActive ? styles.linkActive : styles.linkInactive) };
};

const Nav = () => {
    return (
        <nav style={styles.nav}>
            <NavLink style={({ isActive }) => getActiveStyle(isActive)} to="/">
                Home
            </NavLink>
            <NavLink style={({ isActive }) => getActiveStyle(isActive)} to="/users">
                Users
            </NavLink>
        </nav>
    );
};

export default Nav;
