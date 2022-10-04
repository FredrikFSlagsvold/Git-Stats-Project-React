import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import React from 'react'


type BarChartProps = {
  authorList: Array<String>
  dataList: Array<number>
}

export default function DoughnutChart({authorList, dataList}: BarChartProps) {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Overview',
          },
        },
    }

      const data = {
        labels: authorList,
        datasets: [
          {
            label: 'Commits',
            data: dataList,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 290, 64, 0.5)',
              'rgba(203, 290, 64, 0.5)',


            ],
            borderColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 290, 64, 0.6)',
              'rgba(203, 290, 64, 0.5)',
            ]
          },
        ],
      }

    return (
    <div>
      <Doughnut
      data={data}
      options = {options}/> 
    </div>
    )
}
