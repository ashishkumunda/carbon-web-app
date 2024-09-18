// script.js

function calculateEmissions() {
    // Get the values from the input fields
    const coalTypeFactor = parseFloat(document.getElementById("coalType").value);
    const coalBurned = parseFloat(document.getElementById("coalBurned").value);
    const numberOfWorkers = parseInt(document.getElementById("numberOfWorkers").value);

    // Validate inputs
    if (isNaN(coalBurned) || coalBurned <= 0 || isNaN(numberOfWorkers) || numberOfWorkers <= 0) {
        alert("Please enter valid values for coal burned and number of workers.");
        return;
    }

    // Calculate total carbon emissions
    const totalEmissions = coalTypeFactor * coalBurned; // Carbon emission factor in tons CO2 per ton of coal
    const perCapitaEmissions = totalEmissions / numberOfWorkers;

    // Display the results
    document.getElementById("totalEmissions").textContent = `Total Carbon Emissions: ${totalEmissions.toFixed(2)} tons CO2`;
    document.getElementById("perCapitaEmissions").textContent = `Per Capita Carbon Emissions: ${perCapitaEmissions.toFixed(2)} tons CO2 per worker`;
}
