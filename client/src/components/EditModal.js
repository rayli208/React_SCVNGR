import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

class ModalComp extends Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.company}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="title">Job Title</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="job_title"
                  onChange={this.props.handleInputChange}
                  value={this.props.jobTitle}
                  id="title"
                  placeholder="ex. Production Manager"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone_number"
                  onChange={this.props.handleInputChange}
                  value={this.props.phoneNumber}
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
                  onChange={this.props.handleInputChange}
                  value={this.props.email}
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
                  onChange={this.props.handleInputChange}
                  value={this.props.location}
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
                    onChange={this.props.handleInputChange}
                    value={this.props.salary}
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
                  onChange={this.props.handleInputChange}
                  value={this.props.link}
                  id="link"
                  placeholder="ex. www.google.com/jobs"
                />
              </div>
              <div className="form-group">
                <label htmlFor="text-area">Additional Info..</label>
                <textarea
                  className="form-control"
                  name="info"
                  onChange={this.props.handleInputChange}
                  value={this.props.info}
                  id="text-area"
                  placeholder="ex. Remember to follow up in a week!"
                ></textarea>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="btn btn-outline-pink" onClick={this.props.handleUpdateRequest}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ModalComp;