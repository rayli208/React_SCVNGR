import React from 'react';
import Card from 'react-bootstrap/Card';

const card = (props) => {
    
    return (
      <React.Fragment>
        <Card
          className="my-3 mx-auto" 
          style={{ width: '18rem' }} 
        >
          <Card.Body>
            <Card.Title className="border-bottom">{props.company}</Card.Title>
            <Card.Text>
              <ul>
                {props.jobTitle ? <li>Title: {props.jobTitle}</li> : ''}
                {props.phoneNumber ? <li>Phone number: {props.phoneNumber}</li> : ''}
                {props.email ? <li>Email: {props.email}</li> : ''}
                {props.location ? <li>Location: {props.location}</li> : ''}
                {props.link ? <li>Link: {props.link}</li> : ''}
                {props.salary ? <li>Salary: {props.salary}</li> : ''}
                {props.info ? <li>Info: {props.info}</li> : ''}
                <li>Date created: {props.dateCreated}</li>
              </ul>
            </Card.Text>
            <i 
              className="far fa-edit"
              onClick={props.handleJobEdit}
            />
            <i 
              className="far fa-trash-alt"
              onClick={props.handleJobDelete} 
            />
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  };

export default card;