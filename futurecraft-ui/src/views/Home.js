import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* Rest of your app components */}
    </>
  );
}

export default Home;
