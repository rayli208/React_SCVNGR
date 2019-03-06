import React, {Component} from "react";
import jobAPI from '../utils/jobAPI'
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

class ModalComp extends Component{
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

  handleSaveRequest(event) {
    event.preventDefault();


    console.log(this.state.userInput);

    jobAPI.createJob(this.state.userInput)
      .then(response => console.log(response))
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
      <>
        <Button variant="btn btn-outline-pink" onClick={this.handleShow}>
          Enter Job Info
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Job Information</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <label for="company">Company</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    id="company"
                    placeholder="ex. Microsoft"
                    name="company"
                    onChange={this.handleInputChange}
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
                    name="job_title"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="number"
                    class="form-control"
                    id="phone"
                    placeholder="ex. 123-456-7890"
                    name="phone_number"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="ex. johnsmith@gmail.com"
                    name="email"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div class="form-group">
                  <label for="location">Location</label>
                  <input
                    type="text"
                    class="form-control"
                    id="location"
                    placeholder="ex. 123 random rd, fakecity, PA"
                    name="location"
                    onChange={this.handleInputChange}
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
                      name="salary"
                      onChange={this.handleInputChange}
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
                    name="link"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div class="form-group">
                  <label for="text-area">Additional Info..</label>
                  <textarea
                    class="form-control"
                    id="text-area"
                    placeholder="ex. Remember to follow up in a week!"
                    name="info"
                    onChange={this.handleInputChange}
                  ></textarea>
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
      </>
    );
  }
}
export default ModalComp
