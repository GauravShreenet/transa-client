import React, { useEffect, useState } from 'react'
import TopNav from '../component/TopNav'
import { TransForm } from '../component/TransForm'
import Container from 'react-bootstrap/esm/Container'
import { TransTable } from '../component/TransTable'
import { getTrans } from '../helper/axiosHelper'
import { Button } from 'react-bootstrap'
import { CustomModal } from '../component/CustomModal'

const DashBoard = () => {

  const [transList, setTransList] = useState([]);
  const [resp, setResp] = useState({})
  const [modalShow, setModalShow] = useState(false);

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
      <>
      
      
    </>
        {/* form */}
        <CustomModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ><TransForm getAllTrans={getAllTrans} /></CustomModal>
        <div className="text-end mt-5">
        <Button variant="primary" onClick={() => setModalShow(true)}>
        Add New Transaction
      </Button>
        </div>
        <TransTable transList={transList} getAllTrans={getAllTrans} setResp={setResp}/>
      </Container>



    </div>
  )
}

export default DashBoard