import React from "react";
import { Col, Row } from "react-bootstrap";
import africanman from "../../Assets/africanman.jpg";
import woman from "../../Assets/woman.jpg";
import female from "../../Assets/female.jpg";
import smiling from "../../Assets/smiling.jpg";
import {
  SiLinux,
  SiVisualstudiocode,
 // SiPostman,
  //SiHeroku,
 // SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px",color:"white", }}>
      <Col xs={2} md={2} className="tech-icons">
      <img src={africanman} alt="about" className="img-fluid" style={{width:"300%", hight:"200%"}}/>
      <h6>Mr Rasaq Olowode<br/> <span>(C.e.o)</span></h6><br/>
      </Col>
      <Col xs={2} md={2} className="tech-icons" >
        <img src={woman} alt="about" className="img-fluid" style={{width:"300%", hight:"200%", }}/>
        <h6>Miss Johnson Ahmed<br/>(Legal Advisor)</h6>
      </Col>
      <Col xs={2} md={2} className="tech-icons" >
        <img src={female} alt="about" className="img-fluid" style={{width:"300%", hight:"200%", }}/>
        <h6>Mrs Rhoda .F Johnson<br/>(Board of Advisor)</h6>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
      <img src={africanman} alt="about" className="img-fluid" style={{width:"300%", hight:"200%"}}/>
      <h6>Mr Habeeb .W Ahmed<br/> (Head of Marketing)</h6><br/>
      </Col>
      <Col xs={2} md={2} className="tech-icons" >
        <img src={smiling} alt="about" className="img-fluid" style={{width:"300%", hight:"200%", }}/>
        <h6>Mr Felix.J Ahmed<br/>(IT)<br/></h6>
      </Col>
     {/*<Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
  </Col>*/}
    </Row>
  );
}

export default Toolstack;
