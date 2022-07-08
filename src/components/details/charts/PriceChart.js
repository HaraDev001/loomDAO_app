import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
const { faker } = require('@faker-js/faker');

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
// three types of data
const PriceChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display: false
          }
        },
        scales: {
            price: {
              type: 'linear',
              display: true,
              position: 'left',
              fontColor: "green",
              grid: {
                  color: "rgba(255, 252, 252, 0.1)",
                  borderColor: "rgba(255, 252, 252, 0.1)"
              },
            }, 
            x: {
                color: "green",
                grid: {
                    color: "rgba(255, 252, 252, 0.1)",
                    borderColor: "rgba(255, 252, 252, 0.1)"
                },
            }
        }
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Confluence Premium',
                displayLabel: false,
                data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
                borderColor: 'rgb(188, 16, 100)',
                backgroundColor: 'rgba(255, 255, 255)',
                yAxisID: 'price',
            },
        ]
    }

    return (
    <Line options={options} data={data} />
  )
}

export default PriceChart;