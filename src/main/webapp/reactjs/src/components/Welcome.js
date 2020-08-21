import React from 'react';
import {Jumbotron} from 'react-bootstrap';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

 
    render(){
        return(
        <Jumbotron className="bg-dark text-white">
          <h1>Welcome to Book Shop</h1>
          <p>
            A good bookshop is not just about selling books from shelves, but reaching out into the world and making a difference

          </p>
          
        </Jumbotron>
        );
    }
}

export default Welcome

