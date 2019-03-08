import React from "react";
import Navigation from "../Navigation";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


const Profile = () => {
  return (
    <div>
      <Navigation />
      <div className="container mt-5 text-center">
        <div className="row">
        <div className="col-12 col-md-4">
        <Card>
        <Card.Img variant="top" src="https://www.fillmurray.com/g/300/200" />
  <Card.Body>
    <ListGroup variant="flush">
    <ListGroup.Item>First Name: First</ListGroup.Item>
    <ListGroup.Item>Last Name: Last</ListGroup.Item>
    <ListGroup.Item>Email: email@email.com</ListGroup.Item>
    <ListGroup.Item>Password: password</ListGroup.Item>
  </ListGroup>
    <Button variant="primary">Edit Info</Button>
  </Card.Body>
        </Card>
        </div>
        <div className="col-12 col-md-8">
        <p>Docs</p>
        <Button variant="primary" size="lg" block>Resume</Button>
        <Button variant="primary" size="lg" block>LinkedIn</Button>
        <Button variant="primary" size="lg" block>Add a button</Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
