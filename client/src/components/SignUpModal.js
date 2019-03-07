import React, { Component } from "react";
import jobAPI from '../utils/jobAPI'
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class ModalSignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSaveRequest = this.handleSaveRequest.bind(this)

    this.state = {
      show: false,
      userInput: {
        company: '',
        job_title: '',
        phone_number: '',
        email: '',
        location: '',
        salary: '',
        link: '',
        info: ''
      }
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  async handleSaveRequest(event) {
    event.preventDefault();

    this.handleClose();
    console.log('hi');
    jobAPI.createJob(this.state.userInput)
      .then((res) => {
        console.log(res.data);
        return this.props.getJobInfo();
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      userInput: {
        ...this.state.userInput,
        [name]: value
      }
    })
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
          <Modal.Body><form>
            <div className="form-group">
              <label htmlFor="company">First Name</label>
              <input
                type="text"
                className="form-control"
                name="first-name"
                onChange={this.handleInputChange}
                value={this.state.company}
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
                name="last-name"
                onChange={this.handleInputChange}
                value={this.state.title}
                id="last-name"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
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
                onChange={this.handleInputChange}
                value={this.state.location}
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirm-password"
                onChange={this.handleInputChange}
                value={this.state.location}
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
            <Button variant="btn btn-outline-pink" onClick={this.handleSaveRequest}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalSignUp;