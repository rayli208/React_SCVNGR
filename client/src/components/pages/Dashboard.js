import React, {Component} from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Card from "../pages/Card"
import jobAPI from '../../utils/jobAPI'


class Dashboard extends Component {
  state = {
    jobInfo: []
  }

  getJobInfo = () => {
    jobAPI.findJobs()
      .then((res) => {
        this.setState(() => ({
          jobInfo: res.data
        }))
        console.log(this.state.jobInfo);
      })
      .catch(err => console.log(err));
  }

  handleJobDelete = jobId => {
    jobAPI.deleteJob(jobId)
      .then(this.getJobInfo())
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.getJobInfo();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <div className="row">
          <div className="col-4 bg-dpurp white"><h2>Applied</h2>
            {this.state.jobInfo.map(job => {
              return (
                <Card
                  jobId={job._id}
                  company={job.company}
                  jobTitle={job.job_title}
                  phoneNumber={job.phone_number}
                  email={job.email}
                  link={job.link}
                  salary={job.salary}
                  info={job.info}
                  dateCreated={job.date_created}
                  handleJobDelete={() => this.handleJobDelete(job._id)}
                />
              )
            })}
            
          </div>
          <div className="col-4 bg-purp white"><h2>Heard Back</h2></div>
          <div className="col-4 bg-lpurp white"><h2>Offer</h2></div>
        </div>

        <div className="row">
          <div id="applied" className="col-4 bg-dpurp jobList"></div>
          <div id="heardBack" className="col-4 bg-purp jobList"></div>
          <div id="offer" className="col-4 bg-lpurp jobList"></div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
