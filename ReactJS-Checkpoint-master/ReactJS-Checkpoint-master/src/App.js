import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Form, Button, Dropdown } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
        <Row className="nav" >
          <p>MyBankAccount</p>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" id="dropdown-items">Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2" id="dropdown-items">Deposit</Dropdown.Item>
              <Dropdown.Item href="#/action-3" id="dropdown-items">Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Row>
      <Row className="body" >
        <img src="/money.jpg" alt="money-grwoth" width="850"></img>
        <h1>With MyBankAccount website you can save money and buy your favorite car or house and don't worry about your personal information we're not using any backend framework or database we're just doing a ReactJS checkpoint</h1>
      </Row>
      <Row className="forms" >
        <Form>
          <Form.Group>
            <Form.Label id="form-item">Full name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" id="form-size"/>
          </Form.Group>
          <Form.Group>
            <Form.Label id="form-item">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="form-size"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label id="form-item">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="form-size"/>
          </Form.Group>
          <Button variant="primary" type="submit" id="form-button">
            Login
          </Button>
        </Form>
      </Row>
      <Row className="footer" >
        <p>
          This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
          www.MyBankAccount.com © 2020
        </p>
      </Row>
    </Container>
  </div>
  );
}

export default App;
