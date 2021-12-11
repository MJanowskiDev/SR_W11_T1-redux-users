import Snackbar from 'components/Snackbar';
import { connect } from 'react-redux';
import { getStyleByAnchor } from './styles';

const SnakcbarWrapper = ({ snackbars, anchorOrigin = { vertical: 'bottom', horizontal: 'right' } }) => {
    return (
        <div style={getStyleByAnchor(anchorOrigin)}>
            {snackbars.map((snackbar) => (
                <Snackbar
                    key={snackbar.id}
                    id={snackbar.id}
                    message={snackbar.message}
                    anchorOrigin={snackbar.anchorOrigin}
                    autoHideDuration={snackbar.autoHideDuration}
                    open={true}
                    severity={snackbar.severity}
                />
            ))}
        </div>
    );
};
const mapStateToProps = (state) => ({ snackbars: state.snackbar.snackbars });
export default connect(mapStateToProps)(SnakcbarWrapper);
