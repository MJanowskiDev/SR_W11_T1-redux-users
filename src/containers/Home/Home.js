import { connect } from 'react-redux';
import { Button } from 'components/ui';
import { resetUsers, getUsers, getOneUser } from 'redux/modules/users';

const Home = ({ resetUsers, getUsers, getOneUser }) => {
    const handleLoad = () => {
        getUsers();
    };

    const handleReset = () => {
        resetUsers();
    };

    const handleAdd = () => {
        getOneUser();
    };
    return (
        <div>
            <h1>Home Container</h1>
            <Button onClick={handleLoad}>Load</Button>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleAdd}>Add</Button>
        </div>
    );
};

const dispatchToProps = { resetUsers, getUsers, getOneUser };

export default connect(null, dispatchToProps)(Home);
