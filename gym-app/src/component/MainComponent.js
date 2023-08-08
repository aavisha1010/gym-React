import React from 'react'
import './MainComponent.css'
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Badge } from 'reactstrap';

function MainComponent() {
  return (
    <Container>
      <Row>
        <Card className='mt-2 ' style={{height:'500px'}}>
          <CardHeader className='text-center mt-2'>Welcome to GYM Management System</CardHeader>
          <Container>
            <Row>
              <Col>
                <CardBody>
                  <Button
                    color="primary"
                    outline
                  >
                    Enquiry Today {' '}
                    <Badge color='danger'>
                      4
                    </Badge>
                  </Button>
                </CardBody>
              </Col>
              <Col>
              <CardBody>
                  <Button
                    color="primary"
                    outline
                  >
                    Enquiry All {' '}
                    <Badge color='danger'>
                      5
                    </Badge>
                  </Button>
                </CardBody>
              </Col>
              <Col>
              <CardBody>
                  <Button
                    color="primary"
                    outline
                  >
                  New  Member {' '}
                    <Badge color='danger'>
                      2
                    </Badge>
                  </Button>
                </CardBody>
              </Col>
              <Col>
              <CardBody>
                  <Button
                    color="primary"
                    outline
                  >
                    Total Member {' '}
                    <Badge color='danger'>
                     145
                    </Badge>
                  </Button>
                </CardBody>
              </Col>
            </Row>
          </Container>
        </Card>


      </Row>

    </Container>
  )
}

export default MainComponent