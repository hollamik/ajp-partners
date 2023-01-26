import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import happyclient from "../../Assets/happyclient.jpg";
import Toolstack from "./Toolstack";
//import appartments from "../../Assets/appartments.jpg";
import Visiontool from "./Visiontool";
import Mission from "./Mission";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/*<Row style={{ padding: "10px" }}>*/}
       {/*<Col
            style={{
              margin:"-30px 0px 0px 0px",
              maxWidth:"200%",
            }}>
<img src={appartments} alt="images"/>
        </Col>
        <br/>
          <br/>*/}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "30px",
              fontSize: "2.1em",
            }}
          >
            
            <h1>
               Who <strong className="purple">We are</strong><hr/>
            </h1>
            <Visiontool />
          </Col>
          <Col
            md={5}
            style={{ 
              margin:"-600px 0px 0px 700px",
             }}
            className="about-img"
          >
            <img src={happyclient} alt="about" className="img-fluid"  />
          </Col>

          <Col  md={10}
            style={{
              justifyContent: "center",
              padding: "0px 0px 30px 0px",
              margin:"400px 0px 0px 70px"
             
            }}
          >
          <Mission/>
          </Col>
          
       {/*</Row>*/}
        <h1 className="project-heading">
          Our <strong className="purple">Services </strong><hr/>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Our</strong> Team<hr/>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;

