import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
      {/* Rest of your app components */}
    </>
  );
}

export default Home;
