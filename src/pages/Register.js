import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RegisterForm } from '../component/RegisterForm'
import TopNav from '../component/TopNav'

const Register = () => {
    return (
        <>
            <TopNav />
            <Container fluid>
                <Row>
                    <Col className='d-none d-sm-flex bg-info text-light vh-100 justify-content-center align-items-center'>
                        <div className='shadow-lg rounded p-3'>
                            <h1>Join Our Community!</h1>
                            <p>Laverage our system to track your finance</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center mt-5'>
                        <div className='shadow-lg p-5 border rounded-4'>
                            <h1>Register Now:</h1>
                            <hr />
                            <RegisterForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Register