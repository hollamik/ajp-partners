import React from "react";
import { Row,Col } from "react-bootstrap";


function Mission() {
  return (
    
    <Row style={{ justifyContent: "center", padding: "20px 0px 10px 00px" }}>
      <Col xs={12} md={3} className="tech-icons" >
      <h6>Vision</h6><hr/><br/>
      <p style={{fontSize:"20px",padding:"-20x 0px 0px 0px"}}>"To empower our clients to make informed and confident real estate decisions,<br/> 
        by providing unparalleled service and expert guidance, resulting <br/>
        in successful and satisfying transactions for all parties involved."</p>
      </Col>
      <Col  xs={12} md={4} className="tech-icons">
        <h6>Mission</h6><hr/><br/>
        <p style={{fontSize:"20px",padding:"-20px 0px 0px 0px"}}>"Our mission is to provide exceptional real estate services to our clients by leveraging our market knowledge, 
            industry expertise, and commitment to integrity and honesty in every transaction. 
            We strive to create a positive and personalized experience for buyers, sellers, and investors, 
            while continuously adapting to the changing real estate landscape."</p>
      </Col>
      <Col xs={12} md={3} className="tech-icons">
      <h6>Slogan</h6><hr/><br/>
      <p style={{fontSize:"20px" , padding:"-20px 0px 0px 0px"}}>"........Running a Perfect Building with the best practice"</p>
      </Col>
    </Row>
  );
}

export default Mission;