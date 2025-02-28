let balance = 0.0;

function checkBalance() {
    document.getElementById('result').innerText = `Current Balance: $${balance}`;
}

function depositMoney() {
    let amount = prompt("Enter the amount to deposit:");
    amount = parseFloat(amount);
    if (amount > 0) {
        balance += amount;
        document.getElementById('result').innerText = "Amount deposited successfully.";
    } else {
        document.getElementById('result').innerText = "Invalid amount. Please try again.";
    }
}

function withdrawMoney() {
    let amount = prompt("Enter the amount to withdraw:");
    amount = parseFloat(amount);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById('result').innerText = "Amount withdrawn successfully.";
    } else {
        document.getElementById('result').innerText = "Invalid amount or insufficient balance. Please try again.";
    }
}

