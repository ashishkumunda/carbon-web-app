function calculateCarbonFootprint() {
    // Get input values
    const electricityConsumption = parseFloat(document.getElementById('electricity-consumption').value) || 0;
    const co2IntensityElectricity = parseFloat(document.getElementById('co2-intensity-electricity').value) || 0;
    
    const dieselConsumption = parseFloat(document.getElementById('diesel-consumption').value) || 0;
    const co2IntensityDiesel = parseFloat(document.getElementById('co2-intensity-diesel').value) || 0;
    
    const ventilationEnergyConsumption = parseFloat(document.getElementById('ventilation-energy-consumption').value) || 0;
    const co2IntensityVentilation = parseFloat(document.getElementById('co2-intensity-ventilation').value) || 0;
    
    const processingEnergyConsumption = parseFloat(document.getElementById('processing-energy-consumption').value) || 0;
    const co2IntensityProcessing = parseFloat(document.getElementById('co2-intensity-processing').value) || 0;

    // Calculate total emissions
    const totalEmissions = 
        (electricityConsumption * co2IntensityElectricity) +
        (dieselConsumption * co2IntensityDiesel) +
        (ventilationEnergyConsumption * co2IntensityVentilation) +
        (processingEnergyConsumption * co2IntensityProcessing);

    // Display the result
    document.getElementById('results').innerHTML = `Carbon Footprint Results<br>Total Emissions: ${totalEmissions.toFixed(2)} kg CO2`;
}
