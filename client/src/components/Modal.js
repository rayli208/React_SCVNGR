import React, {Component} from "react";

import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

class ModalComp extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      show: false,
      company: "",
      title: "",
      phone: "",
      email: "",
      location: "",
      salary: "",
      link: "",
      info: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(){
    console.log(this.state);

    this.setState({ show: false });
  }

  handleInputChange(event) {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <Button variant="btn btn-outline-pink" onClick={this.handleShow}>
          Enter Job Info
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Job Information</Modal.Title>
          </Modal.Header>
          <Modal.Body><form>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    
                    type="text"
                    className="form-control"
                    name="company"
                    onChange={this.handleInputChange}
                    value={this.state.company}
                    id="company"
                    placeholder="ex. Microsoft"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Job Title</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                    id="title"
                    placeholder="ex. Production Manager"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    onChange={this.handleInputChange}
                    value={this.state.phone}
                    id="phone"
                    placeholder="ex. 123-456-7890"
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
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    onChange={this.handleInputChange}
                    value={this.state.location}
                    id="location"
                    placeholder="ex. 123 random rd, fakecity, PA"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      name="salary"
                      onChange={this.handleInputChange}
                     value={this.state.salary}
                      id="salary"
                      placeholder="ex. 60,000"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="link">Link to Website</label>
                  <input
                    type="text"
                    className="form-control"
                    name="link"
                    onChange={this.handleInputChange}
                    value={this.state.link}
                    id="link"
                    placeholder="ex. www.google.com/jobs"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="text-area">Additional Info..</label>
                  <textarea
                    className="form-control"
                    name="info"
                    onChange={this.handleInputChange}
                    value={this.state.info}
                    id="text-area"
                    placeholder="ex. Remember to follow up in a week!"
                  ></textarea>
                </div>
              </form></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="btn btn-outline-pink" onClick={this.handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ModalComp
