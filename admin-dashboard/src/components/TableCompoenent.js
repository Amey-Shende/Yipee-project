import React from 'react'
import { Card, CardBody, CardTitle, Col, Row, Table } from 'reactstrap'
import { BsCardText } from "react-icons/bs";

function TableCompoenent() {
    return (
        <Row>
            <Col lg="12">
                <Card className='shadow-none'>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        {/* <i className="bi bi-card-text me-2"> </i> */}
                        <BsCardText className='me-2' />
                        Table with Border
                    </CardTitle>

                    <CardBody className="">
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default TableCompoenent;
