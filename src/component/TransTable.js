import React, { useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { deleteTrans } from '../helper/axiosHelper';

export const TransTable = ({ transList, getAllTrans, setResp }) => {

    const [idsToDelete, setIdsToDelete] = useState([]);

    const handleOnSelectAll = (e) => {
        const { checked, value } = e.target;
        console.log(checked, value);

        // const filterArg = [];
        // transList.forEach(item => {
        //     if (item.type === value) {
        //         filterArg.push(item._id)
        //     }
            
        // })
        // console.log(filterArg)

        const filterArg = transList.map((item)=>item._id);
        console.log(filterArg)

        if (checked) {
            setIdsToDelete([...idsToDelete, ...filterArg]);
        } else {
            const afterRemoving = idsToDelete.filter((id) => !filterArg.includes(id));
            setIdsToDelete(afterRemoving);
        }
    }

    const handleOnItemSelect = (e) => {
        const { checked, value } = e.target;
        console.log(checked, value);
        if (checked) {
            setIdsToDelete([...idsToDelete, value])
        } else {
            setIdsToDelete(idsToDelete.filter((item) => item !== value));
        }
    }

    const handleOnDelete = async () => {
        if (window.confirm("Are you sure you want to delete the selected tasks?")
        ) {
            const result = await deleteTrans(idsToDelete);
            setResp(result);

            if (result?.status === "success") {
                setIdsToDelete([]);
                getAllTrans();
            }
        }
    }

    return (
        <>
            <Row className='my-5'>
                <Col>
                    <h3>{transList.length} Transctions found</h3>
                    <td><input type="checkbox"
                        className='form-check-input'
                        id='allTrans'
                        checked={idsToDelete.length === transList.length}
                        onChange={handleOnSelectAll}
                        value='trans' /> {" "}

                        <label htmlFor='allTrans'>SelectAll</label></td>
                    <Table className='table-striped-column table-hover'>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Income</th>
                                <th>Expenses</th>
                            </tr>
                            {transList.map(({ _id, title, date, amount, type }) => (
                                <tr>
                                    <td>
                                        <input type="checkbox"
                                            className='form-check-input'
                                            id={_id}
                                            value={_id}
                                            onChange={handleOnItemSelect}
                                            checked={idsToDelete.includes(_id)}
                                        /> {" "}
                                        <label htmlFor={_id}>{new Date(date).toLocaleDateString()}</label></td>
                                    <td>{title}</td>
                                    {
                                        type === 'income' ? (
                                            <>
                                                <td className='text-success fw-bold'>{amount}</td>
                                                <td></td>
                                            </>
                                        ) :
                                            (
                                                <>
                                                    <td></td>
                                                    <td className='text-danger fw-bold'>-{amount}</td>
                                                </>
                                            )
                                    }


                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className='text-end fw-bold'>
                                    Total Balance
                                </td>
                                <td className='fw-bold'>
                                    {
                                        transList.reduce((acc, { amount, type }) => {
                                            return type === "income" ? acc + amount : acc - amount
                                        }, 0)
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <div>
                        {
                            idsToDelete.length > 0 && (
                                <div className='d-flex justify-content-center'>
                                    <Button variant='danger'
                                    className='px-5'
                                        onClick={handleOnDelete}>
                                        Delete {idsToDelete.length} Trans
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </>
    )
}
