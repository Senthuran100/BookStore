import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Auth from './components/OAuth';
import Callback from './components/Callback';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const auth = new Auth();
const marginTop = {
  marginTop: "20px"
};
class App extends Component {
  render(){
  return (
    <Router>
      <Navigation auth={auth}/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact  render={(props) => <Welcome {...props} auth={auth} />} />
              <Route path="/add" exact render={(props) => <AddBook {...props} auth={auth} />}/>
              <Route path="/list" exact render={(props) => <BookList {...props} auth={auth} />}/>
              <Route exact path='/callback' render={(props) => <Callback {...props} auth={auth} />}/>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
  }
}

export default App;
