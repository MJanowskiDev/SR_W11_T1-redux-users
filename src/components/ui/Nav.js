import { NavLink } from 'react-router-dom';

const styles = {
    nav: {
        padding: '16px 32px',
        background: '#3d405b',
        display: 'flex',
        width: '100vw',
        gap: 32,
        fontSize: '1.6em'
    },
    link: {
        textDecoration: 'none'
    },
    linkActive: {
        color: '#f2cc8f',
        textDecoration: 'underline #f2cc8f'
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
            <NavLink style={({ isActive }) => getActiveStyle(isActive)} to="/users">
                Users
            </NavLink>

            <NavLink style={({ isActive }) => getActiveStyle(isActive)} to="/">
                Home
            </NavLink>
        </nav>
    );
};

export default Nav;
