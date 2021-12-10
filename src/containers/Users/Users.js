import { useEffect, useState } from 'react';
import { getUsers } from 'redux/modules/users';
import { connect } from 'react-redux';
import { Spinner } from 'components/ui';
import UserList from 'components/Users/UsersList';

const Users = ({ users, isLoading, getUsers }) => {
    const [ localLoading, setLocalLoading ] = useState(true);
    useEffect(
        () => {
            !users.length && getUsers();
            setLocalLoading(false);
        },
        [ getUsers, users ]
    );

    return (
        <div>
            <h1>Users component</h1>
            {localLoading || isLoading ? <Spinner /> : <UserList users={users} />}
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users.users,
    isLoading: state.users.isLoading
});

const mapDispatchToProps = { getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
