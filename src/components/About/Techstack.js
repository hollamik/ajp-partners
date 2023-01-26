import React from "react";
import { Col, Row, } from "react-bootstrap";
//import { CgCPlusPlus } from "react-icons/cg";
import {
 // DiJavascript1,
  //DiReact,
 // DiNodejs,
 // DiMongodb,
  //DiPython,
  //DiGit,
} 
from "react-icons/di";
import {
  //SiPytorch,
  //SiFirebase,
  //SiNextdotjs,
} 
from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", padding: "10px",color:"white", }}>
      <Col xs={4} md={2} className="tech-icons">
       <h4>Land and Building Valuation</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4>Plant and Mechinery Valuation</h4>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <h4>Property Management</h4>
      </Col>
    
      <Col xs={4} md={3} className="tech-icons">
        <h4>Facilities Management</h4>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <h4>Property Development</h4>
      </Col>
      <Col xs={4} md={5} className="tech-icons">
        <h4>Feasibility and Viability Studies</h4>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <h4>Alternative to Dispute Resolution</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
