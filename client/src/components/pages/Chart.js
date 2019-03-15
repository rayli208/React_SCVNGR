import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Axios from 'axios';
import LineChart from './lineChart';
import Navigation from '../Navigation';
var moment = require('moment');


class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {}
    }
  }
  componentDidMount() {
    Axios.get('http://localhost:3000/api/jobinfo/findjobs')
      .then(res => {
        const jobs = res.data;
      
        let applied = [];
        let heardBack = [];
        let offered = [];
        let date = [];
        jobs.forEach(element => {
          var stamp = moment(element.date_created).format("MM/DD");
          applied.push(element.positionId);
          heardBack.push(element.positionId);
          offered.push(element.positionId);
          date.push(stamp);
        });
        this.setState({
          Data: {
            labels: applied,
            datasets: [{
              label: 'Date Applied vs Job Salary',
              data: [1,2,3,4,5,6,7,8,9,10],
              backgroundColor: "rgba(193, 41, 46, 0.75)",
              borderColor: "rgba(59, 89, 152, 1)",
              pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
              pointHoverBorderColor: "rgba(59, 89, 152, 1)",
            }
            ]

          }
        });

      })
  }


  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
        <LineChart />
        <Bar
          data={this.state.Data}
          options={{ maintainAspectRatio: false }} />
      </div>
      </div>
    )
  }
}

export default BarChart