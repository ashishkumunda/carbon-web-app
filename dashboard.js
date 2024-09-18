// Sample data
const carbonEmissions = [100, 89, 72, 85, 61, 42, 45]; // Sample carbon emissions data over time
const carbonSequestration = [10, 17, 24, 41, 34, 58, 67]; // Sample carbon sequestration data over time

// Chart.js to visualize carbon emissions vs. sequestration
const ctx = document.getElementById('emissionChart').getContext('2d');
const emissionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Carbon Emissions (tons)',
                data: carbonEmissions,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Carbon Sequestration (tons)',
                data: carbonSequestration,
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Calculate progress towards carbon neutrality
const totalEmissions = carbonEmissions.reduce((a, b) => a + b, 0);
const totalSequestration = carbonSequestration.reduce((a, b) => a + b, 0);
const progress = (totalSequestration / totalEmissions) * 100;

// Update progress bar
const progressFill = document.getElementById('progressFill');
progressFill.style.width = `${progress}%`;
progressFill.innerHTML = `${progress.toFixed(1)}%`;

const progressPercentage = document.getElementById('progressPercentage');
progressPercentage.innerHTML = `You have achieved ${progress.toFixed(1)}% of your goal towards carbon neutrality.`;
