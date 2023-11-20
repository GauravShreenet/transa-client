import React from 'react'
import TopNav from '../component/TopNav'
import { TransForm } from '../component/TransForm'
import Container from 'react-bootstrap/esm/Container'

const DashBoard = () => {
  return (
    <div>
      {/* navbar */}
      <TopNav />
      <Container fluid>
        {/* form */}
        <TransForm />
      </Container>



    </div>
  )
}

export default DashBoard