import React from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

class card extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;
    console.log(typeof this.props.handleDrag);
    console.log(this.props);
    return (
      <React.Fragment>
        <Card
          className="shadow-lg card mx-auto mb-3 mt-2"
          data-id={this.props.id}
          data-position={this.props.position}
          style={{ width: '18rem' }}
          onChange={this.props.positionUpdate}
        >
        <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="btn card-header bg-purple"
        >
          <h5 className="card-title">{this.props.company}</h5>
          <h6 className="card-subtitle mb-2 text-dimmed">{this.props.jobTitle}</h6>
        </Button>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text" className="text-center">

          <h6 className="pb-2 pt-3">Contact Info:</h6>
            <div className="btn-group pb-2" role="group" aria-label="Basic example">
            {this.props.phoneNumber ? <a className="btn btn-pink side-borders" href={`tel:${this.props.phoneNumber}`} rel="noopener noreferrer"> <i className="fas fa-phone"></i></a> : ""}
            {this.props.email ? <a className="btn btn-pink side-borders" href={`mailto:${this.props.email}`} rel="noopener noreferrer"> <i className="fas fa-envelope"></i></a> : ""}
            {this.props.link ? <a className="btn btn-pink side-borders" target="_blank" href={`https://${this.props.link}`} rel="noopener noreferrer"> <i className="fas fa-link"></i></a> : ""}
        </div>


        <ul className="list-group">
        {this.props.location ? <li className="list-group-item" key={this.props.location}>
              <i className="fa fa-map-pin"></i> <span className="location">{this.props.location}</span>
            </li> : ""}

            {this.props.salary ? <li className="list-group-item" key={this.props.salary}>
              <i className="fa fa-dollar-sign"></i> <span className="salary">{this.props.salary}</span>
            </li> : ""}


            {this.props.info ? <li className="list-group-item" key={this.props.info}>
              <i className="fa fa-info-circle"></i><span className="info">{this.props.info}</span>
            </li> : ""}

       </ul>
              <i className="far fa-edit mt-2 mb-2" onClick={this.props.handleShow} />
              <i
                className="far fa-trash-alt mt-2 mb-2"
                onClick={this.props.handleJobDelete}
              />
          </div>
        </Collapse>
      </Card>

      </React.Fragment>
    );
  }
}


export default card;
