const calculator = document.getElementById('calculator-form');
calculator.addEventListener('submit', calculateTuition);

function calculateTuition(event) {
    event.preventDefault();
   
    const credits = parseFloat(document.getElementById('credits').value);
    const residency = document.getElementById('residency').value;
   
    const boarding = parseFloat(document.getElementById('boarding').value);
    const mealPlan = parseFloat(document.getElementById('meal-plan').value);
    
    const books = parseFloat(document.getElementById('books').value);
    const personal = parseFloat(document.getElementById('personal').value);
    const transportation = parseFloat(document.getElementById('transp').value);

    let tuition = 0;
   
    if (residency === 'in-state') {
        tuition = 19640;
    } else {
        tuition = 25760; 
    }
   
    const totalCost = tuition + boarding + mealPlan + books + personal + transportation;

    document.getElementById('tuition-result').textContent = 'Estimated Total Cost: $' + totalCost.toFixed(2) + ' per year';
}