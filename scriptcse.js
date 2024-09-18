function calculateCarbonSink() {
    // Get input values
    const forestArea = parseFloat(document.getElementById('forestArea').value);
    const treeDensity = parseFloat(document.getElementById('treeDensity').value);
    const carbonPerTree = parseFloat(document.getElementById('carbonPerTree').value);
    const soilArea = parseFloat(document.getElementById('soilArea').value);
    const carbonPerHectare = parseFloat(document.getElementById('carbonPerHectare').value);

    // Calculate total carbon sequestration for forests
    const totalTrees = forestArea * treeDensity;
    const carbonFromForest = totalTrees * carbonPerTree;

    // Calculate total carbon sequestration for soil
    const carbonFromSoil = soilArea * carbonPerHectare * 1000; // converting tons to kg

    // Calculate total carbon sink potential
    const totalCarbonSink = carbonFromForest + carbonFromSoil;

    // Display the results
    document.getElementById('totalCarbonSink').innerHTML = `Total Carbon Sequestration Potential: ${totalCarbonSink.toFixed(2)} kg of CO2`;
}
