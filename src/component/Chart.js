import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HalfChart = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');

    // Destroy any existing chart instance
    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(chartCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [40, 30, 30],
            backgroundColor: ['#ffbf5e', '#e6e6e6', '#e6e6e6'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
      options: {
        rotation: 69.9 * Math.PI,
        circumference: 90 * Math.PI,
        cutoutPercentage: 20,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default HalfChart;
