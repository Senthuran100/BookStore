import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Callback extends Component {


  componentDidMount() {
    this.props.auth.handleAuthentication();
    window.location.href= "http://localhost:3000/";
  }

  render() {
    return (
      <p>Loading...</p>
    );
  }

}

export default withRouter(Callback);