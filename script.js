const calculator = document.getElementById('tuition-calculator');
calculator.addEventListener('submit', calculateTuition);

function calculateTuition(event){ 
    event.preventDefault();


    let residency = document.getElementById('residency').value;
    let boarding = parseFloat(document.getElementById('boarding').value);
    let mealPlan = parseFloat(document.getElementById('meal-plan').value);
    let credits = 36; 
}

let tuition = 0;

if (residency === 'in-state'){
    tuition = credits * 300;
} else {
    tuition = credits * 600;
}

const totalCost = tuition + boarding + mealPlan;


display.getElementById('tuition-result').textContent = 'Estimated Total Cost: $' + totalCost.toFixed(2) + ' per year';