import React from 'react'
import './style.css'
import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register (
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const option = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: '라인차트'
    }
  }
}

const data = {
  labels: [ '1월' , '2월' , '3월' , '4월' , '5월' , '6월'],
  datasets: [
    {
      label: '1번 데이터',
      data: [555, 150, 216, 674, 200, 114],
      borderColor: 'rgba(255,0,0,1)',
      backgroundColor: 'rgba(255,0,0,0.4)'
    }
  ]
}

//                event handler                 //
export default function Local() {

  //                render                 //
  return (
    <Line options={ option } data={ data } />
  );
}
