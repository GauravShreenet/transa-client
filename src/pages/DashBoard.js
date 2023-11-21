import React, { useEffect, useState } from 'react'
import TopNav from '../component/TopNav'
import { TransForm } from '../component/TransForm'
import Container from 'react-bootstrap/esm/Container'
import { TransTable } from '../component/TransTable'
import { getTrans } from '../helper/axiosHelper'

const DashBoard = () => {

  const [transList, setTransList] = useState([]);
  const [resp, setResp] = useState({})

  useEffect(()=>{
    getAllTrans();
  }, [])

  const getAllTrans = async()=> {
    const {status, transList } = await getTrans();
    status === 'success' && setTransList(transList)

  }

  return (
    <div>
      {/* navbar */}
      <TopNav />
      <Container fluid>
        {/* form */}
        <TransForm getAllTrans={getAllTrans} />
        <TransTable transList={transList} getAllTrans={getAllTrans} setResp={setResp}/>
      </Container>



    </div>
  )
}

export default DashBoard