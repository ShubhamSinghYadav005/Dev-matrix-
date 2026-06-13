/* ============================
   Dev Metrics — script.js
   ============================ */

// CodeChef rating data (approximate growth over contests)
const labels = [
  'Jan 25', 'Feb 25', 'Mar 25', 'Apr 25',
  'May 25', 'Jun 25', 'Jul 25', 'Aug 25',
  'Sep 25', 'Oct 25', 'Nov 25', 'Dec 25',
  'Jan 26', 'Feb 26', 'Mar 26', 'Apr 26',
  'May 26', 'Jun 26'
];

const ratings = [
  840, 870, 920, 980,
  1050, 1100, 1180, 1230,
  1280, 1320, 1350, 1370,
  1380, 1390, 1400, 1405,
  1410, 1412
];

// Build the Chart.js line chart
const ctx = document.getElementById('ccChart');

new Chart(ctx, {
  type: 'line',

  data: {
    labels: labels,
    datasets: [{
      label: 'CodeChef Rating',
      data: ratings,
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.06)',
      pointBackgroundColor: '#4CAF50',
      pointRadius: 2,
      pointHoverRadius: 5,
      tension: 0.4,
      fill: true,
      borderWidth: 2
    }]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1a1a2e',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 0.5,
        titleColor: '#7a7a9a',
        bodyColor: '#e8e8f0',
        callbacks: {
          label: function(context) {
            return 'Rating: ' + context.raw;
          }
        }
      }
    },

    scales: {
      x: {
        ticks: {
          color: '#7a7a9a',
          font: { size: 10 },
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 9
        },
        grid: { color: 'rgba(255, 255, 255, 0.04)' }
      },
      y: {
        min: 750,
        max: 1500,
        ticks: {
          color: '#7a7a9a',
          font: { size: 10 }
        },
        grid: { color: 'rgba(255, 255, 255, 0.04)' }
      }
    }
  }
});
