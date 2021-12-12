import ContactForm from 'components/ContactForm/ContactForm';
import { addSnackbar } from 'redux/modules/snackbar';
import { sendForm } from 'redux/modules/contact';
import { connect } from 'react-redux';

const composeErrorMessage = (fieldName, errorType) => {
    switch (errorType) {
        case 'required':
            return `${fieldName} field is required`;
        case 'pattern':
            return `${fieldName} field has wrong value`;
        case 'maxLength':
            return `${fieldName} field value is too long`;
        default:
            return `${fieldName} has error`;
    }
};

const ContactContainer = ({ addSnackbar, sendForm, sending, sent }) => {
    const onFormSubmit = (data) => {
        sendForm(data);
    };

    const onFormError = (errors) => {
        Object.keys(errors).forEach((key) => {
            addSnackbar({ message: composeErrorMessage(key, errors[key].type), severity: 'error' });
        });
    };
    return (
        <div>
            <h1>Contact form</h1>
            <ContactForm formSubmit={onFormSubmit} formError={onFormError} sending={sending} sent={sent} />
        </div>
    );
};

const mapSateToProps = (state) => ({
    sending: state.contact.sending,
    sent: state.contact.sent
});

const mapDispatchToProps = { addSnackbar, sendForm };

export default connect(mapSateToProps, mapDispatchToProps)(ContactContainer);
