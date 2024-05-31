document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const percentageInput = document.getElementById("percentage");
    const totalInput = document.getElementById("total");
    const resultSpan = document.getElementById("result");
  
    calculateButton.addEventListener("click", function() {
      const percentage = parseFloat(percentageInput.value);
      const total = parseFloat(totalInput.value);
      if (!isNaN(percentage) && !isNaN(total)) {
        const result = (percentage / 100) * total;
        resultSpan.textContent = result.toFixed(2);
      } else {
        resultSpan.textContent = "Error";
      }
    });
  });
  