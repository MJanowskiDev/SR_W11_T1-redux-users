import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/ui';
import { Spinner } from 'components/ui';

const styles = { form: { display: 'flex', flexDirection: 'column', gap: 16 } };

const ContactForm = ({ formSubmit, formError, sending, sent }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    const onSubmit = (data) => {
        formSubmit && formSubmit(data);
    };

    useEffect(
        () => {
            if (!isSubmitting) {
                formError && formError(errors);
            }
        },
        [ errors, isSubmitting, formError ]
    );

    useEffect(
        () => {
            if (sent) reset();
        },
        [ sent, reset ]
    );
    if (sending) return <Spinner />;
    return (
        <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="First name"
                {...register('First name', { required: true, maxLength: 150 })}
            />
            <input type="text" placeholder="Email" {...register('Email', { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="text" placeholder="Subject" {...register('Subject', { required: true, maxLength: 250 })} />
            <textarea rows={5} {...register('Message', { required: true, maxLength: 1000 })} />
            <Button>SEND</Button>
        </form>
    );
};

export default ContactForm;
