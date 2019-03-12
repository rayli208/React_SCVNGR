import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class ModalSignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  };

  handleClose() {
    this.setState({ show: false });
  };

  handleShow() {
    this.setState({ show: true });
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="btn btn-outline-light btn-block" onClick={this.handleShow}>
          Sign Up
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="company">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  onChange={this.props.handleInputChange}
                  value={this.props.firstName}
                  id="first-name"
                  placeholder="First Name"
                />
            </div>
            <div className="form-group">
              <label htmlFor="title">Last Name</label>
              <input
                required
                type="text"
                className="form-control"
                name="last_name"
                onChange={this.props.handleInputChange}
                value={this.props.lastName}
                id="last-name"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="username"
                onChange={this.props.handleInputChange}
                value={this.props.username}
                id="email"
                placeholder="ex. johnsmith@gmail.com"
              />
            </div>
            <div className="form-group">
            <label htmlFor="location">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.props.handleInputChange}
                value={this.props.password}
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.props.handleInputChange}
                value={this.props.password2}
                id="confirm-password"
                placeholder="Password"
              />
            </div>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="btn btn-outline-pink" onClick={this.props.checkRegistration}>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalSignUp;