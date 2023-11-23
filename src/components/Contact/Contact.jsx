import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Contact.css'

const Contact = () => {
    const initialValue = {
        name: "",
        email: "",
        message: "",
    };

    const [data, setData] = useState(initialValue);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [submitFeedback, setSubmitFeedback] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (data.name.length < 3) {
            setSubmitFeedback("Name must be at least 3 characters");
            setBtnDisabled(true);
        } else {
            setSubmitFeedback(null);
            setBtnDisabled(false);
        }
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitFeedback("We got it, thanks!");
        setTimeout(() => {
            setData(initialValue);
            navigate("/");
        }, 3000);
    };

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="container">
                <h1 className=''>Contact</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder='Name Surname' name="name" id="name" onChange={handleInputChange} value={data.name} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder='email@email.com' name="email" id="email" onChange={handleInputChange} value={data.email} />
                    <label htmlFor="message">Message:</label>
                    <textarea name="message"
                        placeholder='Hi! I`m...'
                        id="message"
                        onChange={handleInputChange}
                        value={data.message}
                        rows="4" cols="50"
                        maxLength={250} />
                    <button type="submit" disabled={btnDisabled}>Send Message</button>
                </form>
                {submitFeedback}
            </div>
        </>
    )
}

export default Contact