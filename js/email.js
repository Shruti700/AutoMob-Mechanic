import React, { useState } from 'react';

function EmailValidationForm() {
    const [email, setEmail] = useState('');
    const [validationResult, setValidationResult] = useState('');

    const validateEmail = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailPattern.test(email)) {
            setValidationResult('This email is valid.');
        } else {
            setValidationResult('This email is invalid.');
        }
    };

    return (
        <div>
            <h2>Email Validation</h2>
            <label htmlFor="email">Enter your email:</label>
            <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br/>
            <button onClick={validateEmail}>Validate</button>
            <button type='reset'>Clear</button>
            <p style={{ color: validationResult.includes('Valid') ? 'green' : 'red' }}>{validationResult}</p>
        </div>
    );
}

export default EmailValidationForm;





