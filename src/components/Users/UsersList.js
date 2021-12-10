import User from './User';
import { colors } from 'styles/theme';
const styles = {
    container: {
        width: '100%',
        border: `1px solid ${colors.primary}`,
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400
    },
    usersContainer: {
        maxHeight: 500,
        overflowY: 'auto',
        borderRadius: 6
    },
    noEntries: {
        textAlign: 'center',
        fontWeight: 500,
        letter: 1,
        color: colors.error
    }
};
const UserList = ({ users }) => {
    const noUsersFound = <p style={styles.noEntries}>No entries found</p>;

    const usersList = (
        <div style={styles.usersContainer}>
            {users.map((user, id) => <User key={user.login.uuid} user={user} id={id} />)}
        </div>
    );

    return <div style={styles.container}>{users && users.length > 0 ? usersList : noUsersFound}</div>;
};

export default UserList;
