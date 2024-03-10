import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { blue } from '@mui/material/colors';

const TaskAnalytics = ({ tasks }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Process your task data and generate analytics
    const analyticsData = processTaskData(tasks);

    // Create a bar chart
    const ctx = document.getElementById('taskAnalyticsChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: analyticsData.labels,
        datasets: [
          {
            label: ' Task Completion ',
            data: analyticsData.data,
            backgroundColor : blue ,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: Math.max(...analyticsData.data) + 1,
          },
        },
      },
    });

    // Update chartData state for dynamic updates
    setChartData(chart);

    // Clean up on component unmount
    return () => {
      chart.destroy();
    };
  }, [tasks]);

  // Example function to process task data for analytics
  const processTaskData = (tasks) => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = Array.from({ length: labels.length }, () => Math.floor(Math.random() * 10));

    return { labels, data };
  };

  return (
    <div className="task-analytics-container">
      <h2 className="analytics-heading">Task Analytics</h2>
      <div className="chart-container">
        <canvas id="taskAnalyticsChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default TaskAnalytics;
