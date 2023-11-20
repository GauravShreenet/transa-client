import React, { useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { CustomInput } from './CustomInput.js';
import { postTrans } from '../helper/axiosHelper.js';


export const TransForm = () => {

    const [form, setForm] = useState({});

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        console.log(form);

        const result = await postTrans(form);

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

    },
    {
        label: "Title",
        type: "text",
        name: "title",
        required: true,
        placeholder: "desc",
    },
    {
        label: "Amount",
        type: "number",
        name: "amount",
        required: true,

    }]

    return (
        <Form 
        onSubmit={handleOnSubmit}
        className='shadow-lg border rounded p-3 bg-secondary'>

            <Row>
                <Col md={3}>
                <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Select onChange={handleOnChange} name="type">
                        <option value="">--Select--</option>
                        <option value="income">Income</option>
                        <option value="expenses">Expenses</option>
                    </Form.Select>

                </Form.Group>
                </Col>
                
                {inputs.map((item, i) => (
                    <Col md={2} key={i}>
                        <CustomInput {...item} onChange={handleOnChange}/>
                    </Col>
                ))}
                <Col md={1}>
                    <Form.Group className="">
                        <div className="d-grid">
                            <Button type='submit'>
                                Add Tranaction
                            </Button>
                        </div>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}
