import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RaiseClaim from './raiseClaim';
import TrackClaim from "./trackClaim";
import ServiceDetails from "./serviceDetails";
import Passbook from "./passbook";
import UANCard from "./uanCard";
import KYC_Details from './kyc_details';
import KYC_Form from './kycForm';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Form19C from './form19C';


function NavScrollExample() {
  return (
    <div>
      <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* <Nav.Link as={Link} to={"./"}>Claims Portal</Nav.Link> */}
        <Navbar.Brand as={Link} to={"./"}>Claims Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"./raiseClaim"}>Raise Claim</Nav.Link>
            <Nav.Link as={Link} to={"./trackClaim"}>Track Claim</Nav.Link>
            {/* <Nav.Link as={Link} to={"./kyc"}>KYC</Nav.Link> */}
            <Nav.Link as={Link} to={"./serviceDetails"}>Service Details</Nav.Link>
            <Nav.Link as={Link} to={"./passbook"}>Passbook</Nav.Link>
            <Nav.Link as={Link} to={"./uancard"}>UAN Card</Nav.Link>

            <NavDropdown title="KYC" id="basic-nav-dropdown">
              <NavDropdown.Item href="kyc_form">
                KYC Form
              </NavDropdown.Item>
              <NavDropdown.Item href="/kyc_details">
                KYC Details
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Routes>
            <Route path="/raiseClaim" element={<RaiseClaim />} />
            <Route path="/trackClaim" element={<TrackClaim />} />
            <Route path="/kyc_details" element={<KYC_Details />} />
            <Route path="/kyc_form" element={<KYC_Form/>} />
            <Route path="/serviceDetails" element={<ServiceDetails />} />
            <Route path="/passbook" element={<Passbook />} />
            <Route path="/uanCard" element={<UANCard />} />
            <Route path="/form19" element={<Form19C />} />
          </Routes></BrowserRouter>

    </div>
    
  );
}

export default NavScrollExample;
