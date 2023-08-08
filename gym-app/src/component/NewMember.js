import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'
import ApiService from '../services/ApiService';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function NewMember() {
    let navigate = useNavigate();
    let { eid } = useParams();

    useEffect(() => {
        enquiryMemberData();
        packageList();
        BatchesLoad();;


    }, []);




 
    const [packdata, setPackData] = useState([]);

    const [memberenquiry, setMemberEnquiry] = useState([]);
    const [packages, setPackages] = useState([]);
    //batch add if required
    const[batchData,setBatchData]=useState([]);;
    const [batches, setBatches] = useState([]);

    const [start_date, setStartDate] = useState(new Date());

    const [comment, setComment] = useState('');
    const [discount, setDiscount] = useState('');



    const BatchesLoad = () => {
        ApiService.getListOfBatches().then(
          (response) => {
            setBatchData(response);
          },
          (error) => {
            alert("Batches not Loading")
          }
        )
      }


    const enquiryMemberData = () => {
        ApiService.getSingleEnquiry({ eid }).then(
            (response) => {
                setMemberEnquiry(response);
            }, (error) => {
                alert("error")
            }
        )
    }
    const packageList = () => {
        ApiService.getAllPackages().then(
            (response) => {
                setPackData(response);
            }, (error) => {

            }
        )
    }

    const singlePackage = (pid) => {
        
        ApiService.getSinglePackage({ pid }).then(
            (response) => {
                setPackages(response);
                
            }, (error) => {
                alert("Package Error")
            }
        )
    }
    const singleBatch = (bid) => {
        
        ApiService.getSingleBatches({ bid }).then(
            (response) => {
                setBatches(response);
                
            }, (error) => {
                alert("Package Error")
            }
        )
    }

    const onSubmitEnqForm = (e) => {
        e.preventDefault();

        const newmember = {memberenquiry,packages,start_date,comment,discount,batches}
      // alert(moment(startDate).format('DD-MM-YYYY'))
        alert(start_date)

        
    ApiService.addMember(newmember).then(
        (response) => {
         alert(' Enquiry added successfully');
        
  
         navigate("/member") 
        },
        (error) => {
          alert("Something Went wrong !!!!!!")
          console.log(error)
        }
      )

        


    }




    return (
        <Container className='mt-2'>
            <Row>
                <Col>
                    <Card>
                        <CardHeader className='text-center'>Enquiry Detail</CardHeader>
                        <CardBody>
                            <Table>
                                <tr><td>Name</td><td>{memberenquiry.m_name}</td></tr>
                                <tr><td>Contact</td><td>{memberenquiry.contact}</td></tr>
                                <tr><td>Age</td><td>{memberenquiry.age}</td></tr>
                                <tr><td>Address</td><td>{memberenquiry.address}</td></tr>
                                <tr><td>Time Slot</td><td>{memberenquiry.time_slot_expected}</td></tr>
                                <tr><td>Activity</td><td>{memberenquiry.activity}</td></tr>
                                <tr><td>Enquiry Date</td><td>{memberenquiry.enq_date}</td></tr>
                            </Table>

                        </CardBody>
                        <CardFooter className='text-center'><Button color='success' size='sm'
                            outline>Update</Button></CardFooter>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardHeader className='text-center'>Admission Form</CardHeader>
                        <Form onSubmit={onSubmitEnqForm}>
                            <CardBody>

                                <FormGroup>
                                    <Label for='activity'>Start Date </Label>

                                    <DatePicker dateFormat='dd/MM/yyyy' selected={start_date} onChange={(date) => setStartDate(date)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='comment'>Comment</Label>
                                    <Input
                                        id='comment'
                                        name='comment'
                                        type="textarea"
                                     placeholder="enter about member"
                                     value={comment}
                                     onChange={(e) => setComment(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for='discount'>Offer/Discount</Label>
                                    <Input
                                        id='discount'
                                        name='discount'
                                        type="text"
                                     placeholder="1.0"
                                     value={discount}
                                     onChange={(e) => setDiscount(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                        <Label for="batches">Batches</Label>
                        <select className='form-batches' name='batches' value={batches}
                          onChange={(e) => singleBatch(e.target.value)}
                        >
                          {
                            batchData.map((e, key) => {
                              return <option key={key} value={e.batch_id}>{e.batch_name}</option>
                            })
                          }

                        </select>
                      </FormGroup>

                                <FormGroup>
                                    <Label for="packages">Package</Label>
                                    <select className='form-control' name='packages' value={packages}
                                        onChange={(e) => singlePackage(e.target.value) && setPackages(e.target.value)}
                                    >
                                        {
                                            packdata.map((e, key) => {
                                                return <option key={key} value={e.package_id}>{e.package_name}</option>
                                            })
                                        }

                                    </select>
                                </FormGroup>


                            </CardBody>
                            <CardFooter className='text-center'><Button color='success' size='sm' type='submit'
                                outline>add Memeber</Button></CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default NewMember