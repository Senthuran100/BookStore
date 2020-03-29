import React from 'react';
import { Container, Col, Navbar } from 'react-bootstrap';

class Footer extends React.Component{

render(){
   return(
    <Navbar fixed="bottom" bg="dark" variant="dark">
     <Container>
        <Col lg={12} className="text-center text-muted">
          <div>A room without books is like a body without a soul.</div>
        </Col>
     </Container>
    </Navbar>
   );

   }
}

export default Footer;
