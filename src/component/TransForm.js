import React, { useState } from 'react'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import { CustomInput } from './CustomInput.js';
import { postTrans } from '../helper/axiosHelper.js';

const initialState = {
    date: null,
    title: "",
    type: "",
    amount: "",
}

export const TransForm = ({ getAllTrans }) => {

    const [form, setForm] = useState(initialState);
    const [resp, setResp] = useState({});


    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const result = await postTrans(form);
        setResp(result)

        if (result.status === 'success') {
            setForm(initialState)
            getAllTrans();
        }

    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    const inputs = [{

        label: "Date",
        type: "date",
        name: "date",
        required: true,
        value: form.date,

    },
    {
        label: "Title",
        type: "text",
        name: "title",
        required: true,
        placeholder: "desc",
        value: form.title,
    },
    {
        label: "Amount",
        type: "number",
        name: "amount",
        required: true,
        value: form.amount,

    }]

    return (
        <div className="mt-2">
            {
                resp.message && (
                    <Alert variant={resp.status === "success"}>{resp.message}</Alert>)
            }
            <Form
                onSubmit={handleOnSubmit}
                className='shadow-lg border rounded p-3'>

                <Row>
                    <Col md={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Select onChange={handleOnChange} name="type" defaultValue={form.type}>
                                <option value="">--Select--</option>
                                <option value="income" checked={form.type === "income"}>Income</option>
                                <option value="expenses" checked={form.type === "expenses"}>Expenses</option>
                            </Form.Select>

                        </Form.Group>
                    </Col>

                    {inputs.map((item, i) => (
                        <Col md={2} key={i}>
                            <CustomInput {...item} onChange={handleOnChange} />
                        </Col>
                    ))}
                    <Col md={1}>
                        <Form.Group className="">
                            <div className="d-grid mb-4" style={{ marginTop: '4.1vh' }}>
                                <Button type='submit'>
                                    Add
                                </Button>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>

    )
}
