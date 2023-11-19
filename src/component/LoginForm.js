import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';
import { Link } from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const LoginForm = () => {

    const [form, setForm] = useState(initialState);
    

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });

    }

    const inputs = [{
        label: "Email",
        type: "email",
        name: "email",
        required: true,
        placeholder: "John@email.com",
    },
    {
        label: "Password",
        type: "password",
        name: "password",
        required: true,
        placeholder: "*******",
    }]

    console.log(form)

    return (
        <Form>
            {inputs.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
            <div className="text-end mt-4">
                Are you a new Member? <Link to='/signup'>Register</Link> Now
            </div>
        </Form>
    )
}
