import Nav from './Nav';
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        width: '100%',
        maxWidth: 1200,
        padding: 16
    }
};
const Layout = ({ children }) => {
    return (
        <main>
            <Nav />
            <div style={styles.container}>
                <div style={styles.content}>{children}</div>
            </div>
        </main>
    );
};

export default Layout;
