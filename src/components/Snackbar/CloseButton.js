const styles = {
    background: 'none',
    border: 'unset',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingLeft: 16
};

const CloseButton = ({ label = 'x', style, onClick }) => {
    const buttonStyle = style ? { ...styles, ...style } : styles;

    const handleClose = () => {
        onClick && onClick();
    };

    return (
        <button style={buttonStyle} onClick={handleClose}>
            {label}
        </button>
    );
};

export default CloseButton;
