import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../helper/axiosHelper';
import { Alert, Spinner } from 'react-bootstrap';

const initialState = {
    email: "",
    password: "",
}

export const LoginForm = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState(initialState);
    const [resp, setResp] = useState({
        status: '',
        message: ''
    })
    const [isPending, setIsPending] = useState(false);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });

    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // console.log(form)
        setResp({})
        setIsPending(true);

        const data = await loginUser(form);
        setResp(data);
        setIsPending(false);
        console.log(data)

        if (data && data.status === 'success') {
            // store user in session storage
            sessionStorage.setItem("user", JSON.stringify(data.user))

            // redirect user
            navigate('/dashboard');
        }
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
        <Form onSubmit={handleOnSubmit}>
            {resp.message && <Alert variant={resp.status === 'success' ? 'success' : 'danger'}>{" "}{resp.message}</Alert>}
            {inputs.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
                <Button variant="primary" type="submit" disabled={isPending}>
                    {isPending ? <Spinner /> : "Login"}
                </Button>
            </div>
            <div className="text-end mt-4">
                Are you a new Member? <Link to='/signup'>Register</Link> Now
            </div>
        </Form>
    )
}
