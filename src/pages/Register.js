import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RegisterForm } from '../component/RegisterForm'

const Register = () => {
  return (
    <Container fluid>
    <Row>
        <Col className='bg-info text-light vh-100 d-flex justify-content-center align-items-center d-xsm-none'>
            <div className='shadow-lg rounded p-3'>
                <h1>Join Our Community!</h1>
                <p>Laverage our system to track your finance</p>
            </div>
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
            <div className='shadow-lg p-5 border rounded-4'>
                <h1>Register</h1>
                <hr />
                <RegisterForm />
            </div>
        </Col>
    </Row>
</Container>
  )
}

export default Register