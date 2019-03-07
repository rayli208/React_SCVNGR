import React, {Component} from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Card from "../Card";
import jobAPI from '../../utils/jobAPI';


class Dashboard extends Component {
  state = {
    show: false,
    jobInfo: []
  }

  getJobInfo() {
    console.log(this.state.jobInfo)
    jobAPI.findJobs()
      .then((res) => {
        this.setState(() => ({
          jobInfo: res.data
        }))
        console.log((this.state.jobInfo));
      })
      .catch(err => console.log(err));
  }

  handleJobDelete = jobId => {
    jobAPI.deleteJob(jobId)
      .then(this.getJobInfo())
      .catch(err => console.log(err));
  }

  // handleJobEdit= (jobId) => {
  // jobAPI.updateJob(jobId)
  //   .then(this.getJobInfo)
  //   .catch(err => console.log(err));
  // }

  componentDidMount() {
    this.getJobInfo();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header getJobInfo={this.getJobInfo}/>
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
                  jobId={job._id}
                  company={job.company}
                  jobTitle={job.job_title}
                  phoneNumber={job.phone_number}
                  email={job.email}
                  link={job.link}
                  salary={job.salary}
                  location={job.location}
                  info={job.info}
                  dateCreated={job.date_created}
                  handleJobDelete={() => this.handleJobDelete(job._id)}
                  // handleJobEdit={() => this.handleJobEdit(job._id)}
                />
              )
            })}
          </div>
          <div id="heardBack" className="col-4 bg-purp jobList"></div>
          <div id="offer" className="col-4 bg-lpurp jobList"></div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
