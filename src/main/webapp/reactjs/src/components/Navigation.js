import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation =(props) => {

   function login() {
        props.auth.login();
    }

    function logout() {
        props.auth.logout();
        window.location.href= "http://localhost:3000/";
    }

    const { isAuthenticated } = props.auth;
 
        return (
            <Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                    Book Shop
            </Link>
                <Nav className="mr-auto">
                    
                    <Link to={"add"} className="nav-link">Add Book</Link>
                    <Link to={"list"} className="nav-link">List Book</Link>
                </Nav>
               {     
                !isAuthenticated()?
                (
                <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={login.bind(this)}>Sign In</button>
                ):
                (
                <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={logout.bind(this)}>Sign Out</button>
                )
               }
            </Navbar>
        );
}

export default Navigation