function calculateCarbonNeutrality() {
    // Get input values
    const totalEmissions = parseFloat(document.getElementById('totalEmissions').value);
    const forestSink = parseFloat(document.getElementById('forestSink').value);
    const soilSink = parseFloat(document.getElementById('soilSink').value);

    // Calculate total carbon sequestration from sinks
    const totalSinks = forestSink + soilSink;

    // Calculate net carbon balance
    const netCarbonBalance = totalEmissions - totalSinks;

    // Display net carbon balance
    const netBalanceElement = document.getElementById('netCarbonBalance');
    if (netCarbonBalance > 0) {
        netBalanceElement.innerHTML = `Net Carbon Balance: ${netCarbonBalance.toFixed(2)} tons of CO2. You have more emissions than sequestration.`;
    } else {
        netBalanceElement.innerHTML = `Net Carbon Balance: ${Math.abs(netCarbonBalance.toFixed(2))} tons of CO2. Congratulations, you have achieved carbon neutrality!`;
    }

    // Suggest pathways to achieve carbon neutrality
    const suggestionsElement = document.getElementById('neutralitySuggestions');
    if (netCarbonBalance > 0) {
        suggestionsElement.innerHTML = `
            <strong>Suggested Pathways to Achieve Carbon Neutrality:</strong>
            <ul>
                <li>Increase forest area or plant more trees to enhance carbon sequestration.</li>
                <li>Improve soil carbon sequestration through sustainable agricultural practices.</li>
                <li>Invest in renewable energy sources to reduce carbon emissions.</li>
                <li>Implement carbon capture and storage (CCS) technologies.</li>
                <li>Promote energy efficiency and reduce fossil fuel consumption.</li>
            </ul>
        `;
    } else {
        suggestionsElement.innerHTML = `
            <strong>You are carbon neutral!</strong>
            <ul>
                <li>Continue maintaining your carbon sinks and emissions balance.</li>
                <li>Explore additional carbon offset projects to go beyond neutrality.</li>
            </ul>
        `;
    }
}