function Solve() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	let opr = document.getElementById("opr").value;
	let ans;
	if (opr=="/") {
		ans = num1 / num2;
	}
	else if (opr=="*") {
		ans = num1 * num2;
	}
	else if (opr=="+") {
		ans = num1 + num2;
	}
	else if (opr=="-") {
		ans = num1 - num2;
	}
	document.getElementById("answer").innerHTML = ans;
}