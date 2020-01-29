import React from 'react';
import {Navbar,Nav, NavItem} from 'react-bootstrap';
import './App.css';
import Routes from "./Routes";
import Login from './container/Login';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';


class App extends React.Component
{
  render(){
  return(
    <div className="App container">
      <Navbar fluid collapseOnSelect bg="light">
        
          <Navbar.Brand>
            <Link to="/">Authentication Page</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        
          <Navbar.Collapse>
          <Nav className="ml-auto" variant="tabs" bg="light">
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>

    
  );
  }
}
export default App;
