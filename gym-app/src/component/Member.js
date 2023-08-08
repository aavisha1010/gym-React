import React, { useEffect, useState } from 'react'

import { Button, Card, CardBody, CardFooter, CardHeader, Container, Table } from 'reactstrap'
import ApiService from '../services/ApiService';
import Pagination from './Pagination';
import { BrowserRouter as Router,useNavigate,Routes,Route } from 'react-router-dom';


function Member() {
  let navigate = useNavigate();




  useEffect(() => {

    MemberLoad();
    BatchesLoad()

  }, []);

  const [memberList, setMemberList] = useState([]);
  const [batches, setBatches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);


    //Get Current Post
    const indexOfLastPage = currentPage * postPerPage;
    const indexofFirstPost = indexOfLastPage - postPerPage;
    const currentPosts = memberList.slice(indexofFirstPost, indexOfLastPage);
  
    //change current page
    const paginate = (PageNumber) => setCurrentPage(PageNumber);

  const MemberLoad = () => {
    ApiService.getAllMember().then(
      (response) => {
        setMemberList(response);

        console.log(memberList)

      },
      (error) => {
        alert(error)
      }
    )
  }
  const BatchesLoad = () => {
    ApiService.getListOfBatches().then(
      (response) => {
        setBatches(response);
      },
      (error) => {

      }
    )
  }




  return (
    <React.Fragment>
      <Container>
        <Card>
          <CardHeader className='text-center'>Member</CardHeader>
          <CardBody>
            <Table responsive bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Admission Date</th>
                  <th>Contact</th>
                  <th>Payment</th>
                  <th>Last Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              
                  {
                    currentPosts.map((item, index) =>
                    (
                      <tr>
                      <td>{item.memberenquiry.m_name}</td>
                      <td>{item.admission_date}</td>
                     <td>{item.memberenquiry.contact}</td>
                     <td>{item.valid_payment}</td>
                     <td>{item.last_day}</td>
                     <td>
                      <Button outline size='sm' color='success'>Checkout</Button>
                     </td>
                      </tr>
                    ))
                  }
                
              </tbody>
            </Table>
          </CardBody>
          <CardFooter className='text-center' style={{justifyContent : 'center', display : 'flex'}}> 
          <Pagination  postPerPage={postPerPage} totalPosts={memberList.length} paginate={paginate} />
          </CardFooter>
        </Card>






      </Container>
    </React.Fragment>
  )
}

export default Member