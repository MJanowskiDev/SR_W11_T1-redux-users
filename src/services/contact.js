export const sendContactForm = (data = {}) => {
    return fetch(process.env.REACT_APP_CONTACT_FORM_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_CONTACT_FORM_KEY}`
        },
        body: JSON.stringify(data)
    });
};
