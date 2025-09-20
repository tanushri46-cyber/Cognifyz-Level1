// Task 1: Button Color Change
const btn = document.getElementById("colorBtn");
btn.addEventListener("click", function () {
  btn.style.backgroundColor =
    btn.style.backgroundColor === "rgb(255, 126, 185)" ? "lightgreen" : "#ff7eb9";
});

// Task 2: Greeting Message
function showGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "☀️ Good Morning!";
  } else if (hour < 18) {
    greeting = "🌤 Good Afternoon!";
  } else {
    greeting = "🌙 Good Evening!";
  }

  alert(greeting);
}

// Task 3: Calculator
function calculate() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  let result;
  let operationText;

  if (isNaN(n1) || isNaN(n2)) {
    result = "⚠️ Please enter valid numbers!";
    document.getElementById("result").innerText = result;
    return;
  } else {
    switch (op) {
      case "add":
        result = n1 + n2;
        operationText = `${n1} + ${n2} = ${result}`;
        break;
      case "sub":
        result = n1 - n2;
        operationText = `${n1} - ${n2} = ${result}`;
        break;
      case "mul":
        result = n1 * n2;
        operationText = `${n1} × ${n2} = ${result}`;
        break;
      case "div":
        if (n2 !== 0) {
          result = n1 / n2;
          operationText = `${n1} ÷ ${n2} = ${result}`;
        } else {
          result = "❌ Cannot divide by zero!";
          operationText = `${n1} ÷ ${n2} = Error`;
        }
        break;
    }
  }

  // Show result
  document.getElementById("result").innerText = "Result: " + result;

  // Save to history
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = operationText;
  historyList.appendChild(li);
}

// Task 3 Extra: Clear / Reset function
function clearCalc() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operation").value = "add";
  document.getElementById("result").innerText = "";
}
