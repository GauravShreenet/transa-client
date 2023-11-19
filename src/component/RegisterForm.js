import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { CustomInput } from './CustomInput';
import { Link } from 'react-router-dom';
import { postUser } from '../helper/axiosHelper';

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const RegisterForm = () => {

    const [form, setForm] = useState(initialState);
    const [resp, setResp] = useState({
        status: '',
        message: ''
    })
    const [isPending, setIsPending] = useState(false);
    

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });

    }

    const handleOnSubmit = async(e) => {
        e.preventDefault()
        console.log(form)
        const {confirmPassword, ...rest} = form;
        //let's check password if they match
        if(confirmPassword !== rest.password) {
            return alert("Password do not match");
        }

        setIsPending(true);
        const data = await postUser(rest);
        setResp(data);
        setIsPending(false);
        data.status === 'success' && setForm(initialState);
    }

    const inputs = [{
        label: "Name",
        type: "text",
        name: "name",
        required: true,
        placeholder: "John",
        value: form.name
    },
    {
        label: "Email",
        type: "email",
        name: "email",
        required: true,
        placeholder: "John",
        value: form.email
    },
    {
        label: "Password",
        type: "password",
        name: "password",
        required: true,
        placeholder: "*******",
        value: form.password
    },
    {
        label: "Confirm Password",
        type: "password",
        name: "confirmPassword",
        required: true,
        placeholder: "*******",
        value: form.confirmPassword
    }]

    

    return (
        <Form onSubmit={handleOnSubmit}>
            {resp.message && <Alert variant={resp.status === 'success' ? 'success' : 'danger'}>{ " " }{resp.message}</Alert>}
            {inputs.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
                <Button variant="primary" type="submit" disabled={isPending}>
                   {isPending ? <Spinner /> : "Submit"}
                </Button>
            </div>
            <div className="text-end mt-4">
                Already a Member? <Link to='/'>Login</Link> Now
            </div>
        </Form>
    )
}
