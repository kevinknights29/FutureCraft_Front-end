import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">FutureCraft</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1>Welcome to FutureCraft</h1>
        <p>
          "FutureCraft: Shaping LATAM's Workforce with AI-Enhanced Learning" revolutionizes professional development in Latin America through advanced AI, providing personalized coaching and skill optimization for young professionals. This innovative platform offers a unique blend of comprehensive job market preparation and practical application of skills, transforming the educational experience for a dynamic professional landscape.
        </p>
        <p>
          Tackling the skill mismatch and job market unpreparedness among young Latin American professionals, FutureCraft offers AI-enhanced, personalized learning to equip users with market-ready skills and practical experience, effectively bridging the academic-to-professional divide.
        </p>
        <p>
          Our primary target group is university students and recent graduates in Latin America, aged between 22 and 24 years, aiming to equip them with necessary skills and practical experience to bridge the gap between academic learning and real-world job market demands.
        </p>
      </Container>
    </>
  );
}

export default Home;
