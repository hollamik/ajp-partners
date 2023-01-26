import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logoz from "../Assets/logoz.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
 // AiFillStar,
  AiOutlineHome,
 // AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
 // AiOutlinePhone,
 // AiOutlineAlibaba,
  AiOutlineDropbox,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logoz} className="img-fluid logo" alt="brand" style={{
            fontSize:"50px",
            margin:"0px 0px 0px -80px",
            maxWidth:"180%",
            height:"50%",
            }}/><h4><span style={{ fontWeight: 'bold',fontStretch:'2%',fontSize:"20px" }}>Ahmed Johnson Partnership</span></h4>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineDropbox
                  style={{ marginBottom: "2px" }}
                />{" "}
                Portfolio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contacts"
                onClick={() => updateExpanded(false)}
              >
               <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            {/*<Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
        </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
        </Nav.Item>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
    
