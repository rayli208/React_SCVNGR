import React, {Component} from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Card from "../Card";
import jobAPI from '../../utils/jobAPI';
import EditModal from '../EditModal';
var dragula = require('react-dragula');



class Dashboard extends Component {
  state = {
    show: false,
    jobInfo: [],
    updatedJobInfo: {
      _id: '',
      company: '',
      job_title: '',
      phone_number: '',
      email: '',
      location: '',
      link: '',
      salary: '',
      info: ''
    }
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (jobId) => {
    this.setState({ show: true });
    const newJobInfo = this.state.jobInfo.find(job => job._id === jobId)
    this.setState({ updatedJobInfo: newJobInfo })
  };

  getJobInfo = () => {
    jobAPI.findJobs()
      .then((res) => {     
        this.setState(() => ({
          jobInfo: res.data
        }));
        console.log((this.state.jobInfo));
      })
      .catch(err => console.log(err));
  };

  handleJobDelete = jobId => {
    jobAPI.deleteJob(jobId)
      .then(this.getJobInfo())
      .catch(err => console.log(err));
  };

  handleUpdateRequest = jobId => {
    this.handleClose()
    jobAPI.updateJob(this.state.updatedJobInfo._id, this.state.updatedJobInfo)
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

  componentDidMount() {
    this.getJobInfo();
    var drake = dragula([document.querySelector('#applied'), document.querySelector('#heardBack'), document.querySelector('#offer')]);
    drake.on('drop', function(el, target, source, sibling) {
      console.log("From " + source.id + " to " + target.id);
      //console.log(el, " dropped into ", target, " before ", sibling, " came from ", source);
    });
  };

  render() {
    console.log(this.state.updatedJobInfo)
    return (
      <div>
        <EditModal 
          handleClose={() => this.handleClose()}
          show={this.state.show}
          handleInputChange={this.handleInputChange}
          handleUpdateRequest={this.handleUpdateRequest}
          company={this.state.updatedJobInfo.company ? this.state.updatedJobInfo.company : ''}
          jobTitle={this.state.updatedJobInfo.job_title ? this.state.updatedJobInfo.job_title : ''}
          phoneNumber={this.state.updatedJobInfo.phone_number ? this.state.updatedJobInfo.phone_number : ''}
          email={this.state.updatedJobInfo.email ? this.state.updatedJobInfo.email : ''}
          location={this.state.updatedJobInfo.location ? this.state.updatedJobInfo.location : ''}
          salary={this.state.updatedJobInfo.salary ? this.state.updatedJobInfo.salary : ''}
          link={this.state.updatedJobInfo.link ? this.state.updatedJobInfo.link : ''}
          info={this.state.updatedJobInfo.info ? this.state.updatedJobInfo.info : ''}
        />
        <Navigation />
        <Header getJobInfo={this.getJobInfo} />
        <div className="row">
          <div className="col-4 bg-dpurp white"><h2>Applied</h2></div>
          <div className="col-4 bg-purp white"><h2>Heard Back</h2></div>
          <div className="col-4 bg-lpurp white"><h2>Offer</h2></div>
        </div>

        <div className="row">
          <div id="applied" className="col-4 bg-dpurp jobList">
          {this.state.jobInfo.map(job => {
              return (
                <Card
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
                />
              )
            }
            )}
          </div>
          <div id="heardBack" className="col-4 bg-purp jobList"></div>
          <div id="offer" className="col-4 bg-lpurp jobList"></div>
        </div>
      </div>
    );
  };
};

export default Dashboard;
