import React, { Fragment } from "react";
import {Doughnut, Bar} from 'react-chartjs-2'
import 'chart.js/auto';

const serviceData = {
  labels: ['Space', 'Air', 'Drone'],
  datasets: [{
    label: 'Services Used',
    data: [80, 250, 300],
    backgroundColor: ['#222A30', '#507aa9', '#b39f8d']
  }]
}

const usageData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'Space',
    data: [220, 107, 49, 114, 85, 145, 223, 312, 156, 145, 111, 112],
    backgroundColor: ['black']
  },
  {
    label: 'Air Cargo',
    data: [120, 207, 59, 214, 170, 145, 323, 212, 256, 345, 211, 312],
    backgroundColor: ['#507aa9']
  },
  {
    label: 'Drone',
    data: [320, 307, 69, 260, 210, 145, 223, 430, 290, 245, 311, 412],
    backgroundColor: ['#b39f8d']
  }],
}


const BarChart = () => {
  return (
    <div className='chartHolder'>
      <p>Monthly Service Breakdown</p>
      <Bar data={usageData}/>
    </div>
  )
}

const DoughnutChart = () => {
  return (
    <div className='chartHolder'>
      <p>Overall Services Used</p>
      <Doughnut data={serviceData}/>
    </div>
  )
}

export {
  BarChart,
  DoughnutChart
}
