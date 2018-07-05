// BANK SIDE
// Overdraft if insufficient funds
// Overdraft prevention for lower credit score
function registerCustomer() {
	firstName = document.getElementById('firstName').value;
	lastName = document.getElementById('lastName').value;
	email = document.getElementById('email').value;

	displayName = document.getElementById('customerName');
	displayEmail =  document.getElementById('customerEmail');
	displayName.innerHTML = firstName + " " + lastName;
	displayEmail.innerHTML = email;

	balance = document.getElementById('balance').value;
	displayBalance = document.getElementById('displayBalance');
	displayBalance.innerHTML = "$" + balance;
	bankBalance = balance;

	op = document.getElementById('protection');
	if (op.checked) {
		preventOverdraft = true;
	} else {
		preventOverdraft = false;
	}
}

function updateScreen(bb) {
	displayBalance.innerHTML = "$" + bb;
	if (bb < 0) {
		displayBalance.classList.add('negativeBalance');
	}
}
// ATM USER
// able to purchase items
// overdraft prevention

function setBankBalance() {
	bankBalance = document.getElementById('initialBalance').value;
	console.log(bankBalance);
}

function withdrawal() {
	withdrawalAmount = prompt('How much would you like to Withdraw?');
	if (withdrawalAmount > 3000) {
		alert('Maximum withdrawal limit is $3000. Please enter an amount lower than $3000.');
	} else {
		if (withdrawalAmount > parseInt(bankBalance)) {
			alert("OVERDRAFT ALERT");
		} else {
		bankBalance = bankBalance - withdrawalAmount;
		alert("Transaction Complete! \nAvailable Balance: $" + bankBalance);
		updateScreen(bankBalance);
	 }
	}
}

function inquiry() {
	alert("$" + bankBalance);
}

function purchaseItem1() {
	x = document.getElementById('item1').value;
	if (preventOverdraft == true) {
			if (x > bankBalance) {
				alert('Your bank has prevented an overdraft!');
			} else {
				bankBalance = bankBalance - x;
				alert('Your order has been shipped!');
				updateScreen(bankBalance);
			}
} else {
	bankBalance = bankBalance - x;
	alert('Your order has been shipped!');
	updateScreen(bankBalance);
}
}
