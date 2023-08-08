import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './component/Header';
import LeftComponent from './component/LeftComponent';
import Member from './component/Member';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import MainComponent from './component/MainComponent';
import MemberEng from './component/MemberEng';
import Layout from './component/Layout';
import Batches from './component/Batches';
import ListGroup from 'react-bootstrap/ListGroup';
import Packages from './component/Packages';
import {ImHome} from 'react-icons/im';
import { MdPeopleAlt,MdOutlineCalendarMonth } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { BiSolidTime } from "react-icons/bi";
import NewMember from './component/NewMember';



function App() {
  return (
    <Container>
      <Header />
      <Router>
        <Row>
          <Col  xs lg="2" className='mt-1'>
            <div className='list-group'>

              <Link to='/' className='list-group-item list-group-item-action'><ImHome className='m-1'/>HOME</Link>
              <Link to='/enquiry' className='list-group-item list-group-item-action'><HiSpeakerphone className='m-1'/>Enquiry</Link>
              <Link to='/member' className='list-group-item list-group-item-action'><MdPeopleAlt className='m-1'/>Member</Link>
              <Link to='/batches' className='list-group-item list-group-item-action'><BiSolidTime className='m-1'/>Batches</Link>
              <Link to='/packages' className='list-group-item list-group-item-action'><MdOutlineCalendarMonth className='m-1'/>Packages</Link>
            </div>



        
          </Col>
          <Col>

          <Routes>
          <Route exact path='/' element={< MainComponent />}></Route>
          <Route exact path='/member' element={< Member />}></Route>
          <Route exact path='/batches' element={< Batches />}></Route>
          <Route exact path='/packages' element={< Packages />}></Route>
          <Route exact path='/enquiry' element={< MemberEng />}></Route>
          <Route exact path='/member/:eid' element={< NewMember />}></Route>
        </Routes>
          </Col>
        </Row>
      

      </Router>
    </Container>
  )
}

export default App;
