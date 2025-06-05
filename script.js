const ctx = document.getElementById('certChart').getContext('2d');

const certChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['7d', '6d', '5d', '4d', '3d', '2d', '1d'],
    datasets: [{
      label: 'Certificados',
      data: [10, 20, 30, 25, 40, 35, 50],
      borderColor: '#00bcd4',
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }
});