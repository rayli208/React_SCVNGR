import React, { Component } from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Card from "../Card";
import jobAPI from "../../utils/jobAPI";
import userAPI from '../../utils/userAPI'
import { Redirect } from "react-router-dom";
import EditModal from "../EditModal";
import Dragula from "react-dragula";
import Swal from 'sweetalert2';


class Dashboard extends Component {
  
  state = {
    show: false,
    jobInfo: [],
    updatedJobInfo: {
      _id: "",
      company: "",
      job_title: "",
      phone_number: "",
      email: "",
      location: "",
      link: "",
      salary: "",
      info: "",
      positionId: 1
    },
    isLoggedIn: true,
    user: {}
  };

  loginCheck = () => {
    userAPI.loginCheck()
      .then(res =>{
        this.setState({ 
        isLoggedIn: res.data.isLoggedIn, 
        user: res.data.userInfo })
        this.getJobInfo();
      })
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = jobId => {
    this.setState({ show: true });
    const newJobInfo = this.state.jobInfo.find(job => job._id === jobId);
    this.setState({ updatedJobInfo: newJobInfo });
  };

  getJobInfo = () => {
    jobAPI
      .findJobs()
      .then(res => {
        this.setState(() => ({
          jobInfo: res.data
        }));
        console.log(this.state.jobInfo);
      })
      .catch(err => console.log(err));
  };

  handleJobDelete = jobId => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c49991",
      cancelButtonColor: "#2e003e",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        jobAPI
          .deleteJob(jobId)
          .then(this.getJobInfo())
          .catch(err => console.log(err));
        Swal.fire({
          title: "Keep on hunting!",
          type: "success",
          confirmButtonColor: "#c49991",
          confirmButtonText: "OK!"
        });
      }
    });
  };

  handleUpdateRequest = () => {
    this.handleClose();
    Swal.fire({
      title: "Keep on hunting!",
      type: "success",
      confirmButtonColor: "#c49991",
      confirmButtonText: "OK!"
    });
    jobAPI
      .updateJob(this.state.updatedJobInfo._id, this.state.updatedJobInfo)
      .then(this.getJobInfo())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      updatedJobInfo: {
        ...this.state.updatedJobInfo,
        [name]: value
      }
    });
  };

  handlePositionUpdate = (jobId, position) => {
    const newJobInfo = this.state.jobInfo.find(job => job._id === jobId);
    newJobInfo.positionId = position;
    this.setState({ updatedJobInfo: newJobInfo });
    jobAPI
      .updateJob(this.state.updatedJobInfo._id, this.state.updatedJobInfo)
      .then(this.getJobInfo())
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loginCheck();
  }

  dragulaDecorator = componentBackingInstance => {
    var me = this;
    if (componentBackingInstance) {
      let options = {
      };
      var containers = [].slice.call(componentBackingInstance.children);
      var dragula = Dragula(containers, options);
      dragula.on('drop', function(el, target, source, sibling) {
          console.log("dropped ", el.dataset.id, " from ", el.dataset.position, " to ", target.dataset.id);
          var jobId = el.dataset.id;
          var from = el.dataset.position;
          var to = target.dataset.id;
          this.cancel(true);
          if (from !== to) {
            console.log("moving ", jobId, " from ", from, " to ", to);
            me.handlePositionUpdate(jobId, to);
            el.dataset.position = to;
          }
        }
      );
    }
  };

  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <EditModal
          handleClose={() => this.handleClose()}
          show={this.state.show}
          handleInputChange={this.handleInputChange}
          handleUpdateRequest={this.handleUpdateRequest}
          company={
            this.state.updatedJobInfo.company
              ? this.state.updatedJobInfo.company
              : ""
          }
          jobTitle={
            this.state.updatedJobInfo.job_title
              ? this.state.updatedJobInfo.job_title
              : ""
          }
          phoneNumber={
            this.state.updatedJobInfo.phone_number
              ? this.state.updatedJobInfo.phone_number
              : ""
          }
          email={
            this.state.updatedJobInfo.email
              ? this.state.updatedJobInfo.email
              : ""
          }
          location={
            this.state.updatedJobInfo.location
              ? this.state.updatedJobInfo.location
              : ""
          }
          salary={
            this.state.updatedJobInfo.salary
              ? this.state.updatedJobInfo.salary
              : ""
          }
          link={
            this.state.updatedJobInfo.link ? this.state.updatedJobInfo.link : ""
          }
          info={
            this.state.updatedJobInfo.info ? this.state.updatedJobInfo.info : ""
          }
        />
        <Navigation />
        <Header getJobInfo={this.getJobInfo} />
        <div className="row">
          <div className="col-4 bg-dpurp white">
            <h2>Applied</h2>
          </div>
          <div className="col-4 bg-purp white">
            <h2>Heard Back</h2>
          </div>
          <div className="col-4 bg-lpurp white">
            <h2>Offer</h2>
          </div>
        </div>

        <div className="row" ref={this.dragulaDecorator}>
          <div id="applied" className="col-4 bg-dpurp jobList" data-id="1">
            {this.state.jobInfo
              .filter(job => job.positionId === 1)
              .map(job => {
                return (
                  <Card
                    id={job._id}
                    position={job.positionId}
                    key={job._id}
                    company={job.company}
                    jobTitle={job.job_title}
                    phoneNumber={job.phone_number}
                    email={job.email}
                    location={job.location}
                    link={job.link}
                    salary={job.salary}
                    info={job.info}
                    dateCreated={job.date_created}
                    handleJobDelete={() => this.handleJobDelete(job._id)}
                    handleShow={() => this.handleShow(job._id)}
                    // positionUpdate={() => this.handlePositionUpdate(job._id, job.positionId)}
                  />
                );
              })}
          </div>
          <div id="heardBack" className="col-4 bg-purp jobList" data-id="2">
            {this.state.jobInfo
              .filter(job => job.positionId === 2)
              .map(job => {
                return (
                  <Card
                    id={job._id}
                    position={job.positionId}
                    key={job._id}
                    company={job.company}
                    jobTitle={job.job_title}
                    phoneNumber={job.phone_number}
                    email={job.email}
                    location={job.location}
                    link={job.link}
                    salary={job.salary}
                    info={job.info}
                    dateCreated={job.date_created}
                    handleJobDelete={() => this.handleJobDelete(job._id)}
                    handleShow={() => this.handleShow(job._id)}
                    // positionUpdate={() => this.handlePositionUpdate(job._id, job.positionId)}
                  />
                );
              })}
          </div>
          <div id="offer" className="col-4 bg-lpurp jobList" data-id="3">
            {this.state.jobInfo
              .filter(job => job.positionId === 3)
              .map(job => {
                return (
                  <Card
                    id={job._id}
                    position={job.positionId}
                    key={job._id}
                    company={job.company}
                    jobTitle={job.job_title}
                    phoneNumber={job.phone_number}
                    email={job.email}
                    location={job.location}
                    link={job.link}
                    salary={job.salary}
                    info={job.info}
                    dateCreated={job.date_created}
                    handleJobDelete={() => this.handleJobDelete(job._id)}
                    handleShow={() => this.handleShow(job._id)}
                    // positionUpdate={() => this.handlePositionUpdate(job._id, job.positionId)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
