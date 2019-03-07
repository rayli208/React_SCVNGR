import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import jobAPI from '../../utils/jobAPI'

class card extends Component {
  state = {
    jobInfo: []
  }
  
  getJobInfo = () => {
    jobAPI.findJobs()
      .then((jobs) => {
        this.setState(() => ({
          jobInfo: jobs.data
        }))
        console.log(this.state.jobInfo);
      })
      .catch(err => console.log(err));
  }

  handleJobDelete = jobId => {
    jobAPI.deleteJob(jobId)
      .then(this.getJobInfo)
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getJobInfo();
  }

  render() {
    
    return (
      <React.Fragment>
      {this.state.jobInfo.map(job => {
        return (
          <Card style={{ width: '18rem' }} key={job._id}>
            <Card.Body>
              <Card.Title>{job.company}</Card.Title>
              <Card.Text>
                <ul>
                  {job.job_title ? <li>Title: {job.job_title}</li> : ''}
                  {job.phone_number ? <li>Phone number: {job.phone_number}</li> : ''}
                  {job.email ? <li>Email: {job.email}</li> : ''}
                  {job.link ? <li>Link: {job.link}</li> : ''}
                  {job.salary ? <li>Salary: {job.salary}</li> : ''}
                  {job.info ? <li>Info: {job.info}</li> : ''}
                  <li>Date created: {job.date_created}</li>
                </ul>
              </Card.Text>
              <i 
              className="far fa-trash-alt"
              onClick={() => this.handleJobDelete(job._id)} 
              />
            </Card.Body>
          </Card>
        )
      })}
      </React.Fragment>
    );
  }
}

export default card;
