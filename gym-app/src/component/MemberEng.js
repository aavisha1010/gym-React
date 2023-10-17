import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Input, Label, Spinner, Table } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from './Pagination';
import { BrowserRouter as Router,useNavigate,Routes,Route } from 'react-router-dom';


import './MemberEnq.css';
import ApiService from '../services/ApiService';


function MemberEng() {
  let navigate = useNavigate();
  useEffect(() => {
   
    BatchesLoad();
    EnquryLoad();
  }, []);
  const [batches, setBatches] = useState([]);
  const [enquiryData, setEnquiryData] = useState([]);
  const [m_name, setMName] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [time_slot_expected, setTimeSlot] = useState('');
  const [status, setStatus] = useState('Pending');
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);


  const BatchesLoad = () => {
    ApiService.getListOfBatches().then(
      (response) => {
        setBatches(response);
        setLoading(false)
      },
      (error) => {
        toast.warn("Batches not Loading")
      }
    )
  }

  const EnquryLoad = () => {
    ApiService.getAllEnquiryData().then(
      (response) => {
        setEnquiryData(response);
      },
      (error) => {
        toast.warn("Enquiry not Loading")
        console.log(error)
      }

    )
  }

  if (loading) {
    return <div><Spinner color='info'>Loading.....</Spinner></div>
  }
  //Get Current Post
  const indexOfLastPage = currentPage * postPerPage;
  const indexofFirstPost = indexOfLastPage - postPerPage;
  const currentPosts = enquiryData.slice(indexofFirstPost, indexOfLastPage);

  //change current page
  const paginate = (PageNumber) => setCurrentPage(PageNumber);


  const onSubmitEnqForm = (e) => {
    e.preventDefault();
    const enqformData = { m_name, contact, address, age, time_slot_expected, activity, status }



    ApiService.addEnquiryData(enqformData).then(
      (response) => {
        toast(' Enquiry added successfully');
      

        EnquryLoad();
      },
      (error) => {
        toast.error("Something Went wrong !!!!!!")
        console.log(error)
      }
    )

  }


  return (
    
    <Container className='mt-1'>
   
      <Row>
        <Col xs lg="8">
          <Card>
            <CardHeader className='text-center'>Enquiry List</CardHeader>

          
          <Table bordered striped responsive size="sm">
            <thead >
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Date</th>
                <th>Status</th>
                <th>Time Slot</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                currentPosts.map(enq => (
                  <tr key={enq.enq_id}>
                    <td>{enq.m_name}</td>
                    <td>{enq.contact}</td>
                    <td>{enq.enq_date}</td>
                    <td>{enq.status}</td>
                    <td>{enq.time_slot_expected}</td>
                    <td>

<Button onClick={()=>
{
  navigate("/member/"+enq.enq_id) 
}} color='success'size='sm'>Proceed</Button>

                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
         
          <CardFooter style={{display : 'flex',justifyContent :'center'}}>
          <Pagination postPerPage={postPerPage} totalPosts={enquiryData.length} paginate={paginate} />
          </CardFooter>
          </Card>

        </Col>
        <Col xs lg="4">
          <Card>
            <CardHeader className='text-center'>Enquiry Form</CardHeader>
            <CardBody>
              <Form onSubmit={onSubmitEnqForm}>
                <FormGroup>
                  <Label for='enquiry_name'>Name</Label>
                  <Input
                    id='enquiry_name'
                    name='m_name'
                    placeholder='john cena'
                    type='text'
                    value={m_name}
                    onChange={(e) => setMName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Label for='contact'>Contact</Label>
                  <Input
                    id='contact'
                    name='contact'
                    type='text'
                    placeholder="+91 9XXXXXXXXX"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)} />
                </FormGroup>

                <FormGroup>
                  <Label for='address'>Address</Label>
                  <Input
                    id='address'
                    name='address'
                    type="text"
                    placeholder="location"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} />
                </FormGroup>
                <Container>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for='age'>Age</Label>
                        <Input
                          id='age'
                          name='age'
                          type="text"
                          placeholder="age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)} />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="time_slot_expected">Time Slot</Label>
                        <select className='form-control' name='time_slot_expected' value={time_slot_expected}
                          onChange={(e) => setTimeSlot(e.target.value)}
                        >
                          {
                            batches.map((e, key) => {
                              return <option key={key} value={e.batch_name}>{e.batch_name}</option>
                            })
                          }

                        </select>
                      </FormGroup>
                    </Col>
                  </Row>
                </Container>
                <FormGroup>
                  <Label for='activity'>Activity</Label>
                  <Input
                    id='activity'
                    name='activity'
                    type="text"
                    placeholder="GYM//ZUMBA"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)} />
                </FormGroup>
                <FormGroup className='text-center'>
                  <Button color='success'size='sm'
                    outline type='submit'>Submit</Button>
                </FormGroup>


              </Form>
            </CardBody>
          </Card>





        </Col>

      </Row>
    </Container>
  )
}

export default MemberEng