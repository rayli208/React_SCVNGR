import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class ModalLogin extends Component {
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
          Login
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
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
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="btn btn-outline-pink" onClick={this.props.handleLogin}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalLogin;