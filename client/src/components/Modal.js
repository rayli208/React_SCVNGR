import React, {Component} from "react";

import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

class ModalComp extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
                <div class="form-group">
                  <label for="company">Company</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    id="company"
                    placeholder="ex. Microsoft"
                  />
                </div>
                <div class="form-group">
                  <label for="title">Job Title</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="ex. Production Manager"
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="number"
                    class="form-control"
                    id="phone"
                    placeholder="ex. 123-456-7890"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="ex. johnsmith@gmail.com"
                  />
                </div>
                <div class="form-group">
                  <label for="location">Location</label>
                  <input
                    type="text"
                    class="form-control"
                    id="location"
                    placeholder="ex. 123 random rd, fakecity, PA"
                  />
                </div>
                <div class="form-group">
                  <label for="salary">Salary</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">$</span>
                    </div>
                    <input
                      type="number"
                      class="form-control"
                      id="salary"
                      placeholder="ex. 60,000"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="link">Link to Website</label>
                  <input
                    type="text"
                    class="form-control"
                    id="link"
                    placeholder="ex. www.google.com/jobs"
                  />
                </div>
                <div class="form-group">
                  <label for="text-area">Additional Info..</label>
                  <textarea
                    class="form-control"
                    id="text-area"
                    placeholder="ex. Remember to follow up in a week!"
                  ></textarea>
                </div>
              </form></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="btn btn-outline-pink" onClick={this.handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ModalComp
