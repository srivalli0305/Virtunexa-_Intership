function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers!");
        return;
    }

    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; break;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
    saveHistory(`${num1} ${operator} ${num2} = ${result}`);
}

function saveHistory(entry) {
    let history = JSON.parse(localStorage.getItem('calcHistory')) || [];
    history.unshift(entry);
    localStorage.setItem('calcHistory', JSON.stringify(history));
    displayHistory();
}

function displayHistory() {
    const history = JSON.parse(localStorage.getItem('calcHistory')) || [];
    const list = document.getElementById('historyList');
    list.innerHTML = "";

    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item} <span onclick="deleteHistory(${index})">❌</span>`;
        list.appendChild(li);
    });
}

function deleteHistory(index) {
    let history = JSON.parse(localStorage.getItem('calcHistory')) || [];
    history.splice(index, 1);
    localStorage.setItem('calcHistory', JSON.stringify(history));
    displayHistory();
}

// Show history on page load
window.onload = displayHistory;
