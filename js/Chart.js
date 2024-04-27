const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2')
              
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Конверсии',
      data: [190, 140, 110, 203, 120, 95, 120],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Посетители',
      data: [563, 370, 478, 903, 203, 250, 456],
      borderWidth: 1,
      backgroundColor: "rgba(255,99,132,.5)"
    }]
  },
  options: {
    
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
