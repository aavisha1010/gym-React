import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Row, Table } from 'reactstrap'
import ApiService from '../services/ApiService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Packages() { 
  let navigate = useNavigate();
  useEffect(() => {
   
    PackagesLoad();
    
  }, []);


  const [packages, setPackages] = useState([]);

  const PackagesLoad = () => {
    ApiService.getAllPackages().then(
      (response) => {
        setPackages(response);
      },
      (error) => {
        toast.warn("Packages not Loading")
      }
    )
  }
  return (
    <Container>
      <Card>
        <CardHeader>
          <Row>
            <Col sm={0}></Col>
            <Col className='text-center'>Packages</Col>
            <Col style={{textAlign : 'end'}}>
              <Button outline size='sm' color='success'>New Packages</Button>
            </Col>
          </Row>
        </CardHeader>
       
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Total Days</th>
                <th>Amount</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {
                packages.map(pkg =>
                  (
                    <tr key={pkg.package_id}>
                      <td>{pkg.package_name}</td>
                      <td>{pkg.package_days}</td>
                      <td>{pkg.package_amt}</td>
                      <td> <Button color='success'size='sm'>Update</Button></td>

                    </tr>
                  ))
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Packages