import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row, Table } from 'reactstrap'
import ApiService from '../services/ApiService';
import { toast } from 'react-toastify';

function Batches() {
  let navigate = useNavigate();
  useEffect(() => {
   
    BatchesLoad();
    
  }, []);


  const [batches, setBatches] = useState([]);

  const BatchesLoad = () => {
    ApiService.getListOfBatches().then(
      (response) => {
        setBatches(response);
      },
      (error) => {
        toast.warn("Batches not Loading")
      }
    )
  }


  return (
    <Card>
      <CardHeader >
        <Container>
          <Row>
            <Col></Col>
            <Col className='text-center'>Batches</Col>
            <Col style={{ textAlign: 'end' }}>
              <Button outline color='success' size='sm'>
                Add Batches
              </Button>
            </Col>
          </Row></Container>
      </CardHeader>
      <CardBody>
        <Table size='sm'  responsive bordered striped >
          <thead>
            <tr>
              <th>Batch Name</th>
              <th>Time Slot</th>
              <th>Capacity</th>
              <th>Member</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              batches.map(enq =>
                (
                  <tr key={enq.batch_id}>
                    <td>{enq.batch_name}</td>
                    <td>{enq.batch_start_time}</td>
                    <td>25</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>
                    <Button color='success'size='sm'>Check</Button>
                    </td>
                  </tr>
                ))
            }
           
          </tbody>
        </Table>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default Batches