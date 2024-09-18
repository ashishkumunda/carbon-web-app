
document.addEventListener('DOMContentLoaded', function () {
    // Data for 2023 and 2024
    const data2023 = {
        coalProduction: [65, 70, 72, 68],
        emissions: [65 * (0.9 + 0.4), 70 * (0.9 + 0.4), 72 * (0.9 + 0.4), 68 * (0.9 + 0.4)]
    };

    const data2024 = {
        coalProduction: [70, 75, 68, 73],
        emissions: [70 * (0.9 + 0.4), 75 * (0.9 + 0.4), 68 * (0.9 + 0.4), 73 * (0.9 + 0.4)]
    };

    let currentData = data2024;

    function updateCharts() {
        // Update Pie Chart
        const ctxPie = document.getElementById('pieChart').getContext('2d');
        new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Total Emissions',
                    data: currentData.emissions,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return ` ${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)} kg CO2`;
                            }
                        }
                    }
                }
            }
        });

        // Update Scatter Plot
        const ctxScatter = document.getElementById('scatterPlot').getContext('2d');
        new Chart(ctxScatter, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Emissions vs. Production',
                    data: currentData.coalProduction.map((prod, i) => ({
                        x: prod,
                        y: currentData.emissions[i]
                    })),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                    
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Coal Production (Million Tons)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Total Emissions (Million kg CO2)'
                        }
                    }
                }
            }
        });

        // Update Histogram
        const ctxHistogram = document.getElementById('histogram').getContext('2d');
        new Chart(ctxHistogram, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Coal Production',
                    data: currentData.coalProduction,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Quarter'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Coal Production (Million Tons)'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    };

    // Initial chart load
    updateCharts();

    // Event listener for dropdown menu
    document.getElementById('yearSelect').addEventListener('change', function (event) {
        const selectedYear = event.target.value;
        currentData = selectedYear === '2023' ? data2023 : data2024;
        updateCharts();
    });
});
