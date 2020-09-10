import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
const Profile = () =>{

    return(
        <Container Fluid className="mb-5">
            <p className="text-left small"><b>Account</b><br/>G M Mufeed</p>
            <hr/>
            <Row>
                <Col className="text-left small" style={{borderRight:"1px solid rgba(0,0,0,.2)"}}>
                <p>Overview</p><hr/>
                <p className="font-weight-bold">ORDERS</p><p>Orders & Returns</p><hr/>
                <p className="font-weight-bold">ACCOUNT</p><p style={{color:"red"}}>Profile</p><p>Saved Cards</p><p>Address</p>
                <hr/>
                </Col>
                <Col md={9} className="text-left">
                    <h4 >Profile Details</h4>
                    <hr/>
                    <Row className="mb-3"><Col>Mobile</Col><Col>9148523052</Col></Row>
                    <Row className="mb-3"><Col>Full Name</Col><Col>G M MUFEED</Col></Row>
                    <Row className="mb-3"><Col>Email Id</Col><Col>gangolimufeed@gmail.com</Col></Row>
                    <Row className="mb-3"><Col>Gender</Col><Col>Male</Col></Row>
                    <Row className="mb-3"><Col>Date of Birth</Col><Col>01/06/1998</Col></Row>
                    <Row className="mb-3"><Col>Location</Col><Col>- not added -</Col></Row>
                    <Row className="mb-3"><Col>Alternate Mobile</Col><Col>8277721165</Col></Row>
                    <Row className="mb-3"><Col>Nickname</Col><Col>- not added -</Col></Row>
                    <Button variant="danger" style={{width: "20%", backgroundColor:"#ff3f6c"}} type="submit">
                        EDIT
                    </Button>
                </Col>
            </Row>
            <hr/>
        </Container>
    )
}

export default Profile;