import ClipLoader from 'react-spinners/ClipLoader';
import { colors } from 'styles/theme';
const styles = {
    container: {
        textAlign: 'center',
        color: colors.primary
    }
};

const Spinner = () => {
    return (
        <div style={styles.container}>
            <ClipLoader loading={true} size={100} />
        </div>
    );
};

export default Spinner;
