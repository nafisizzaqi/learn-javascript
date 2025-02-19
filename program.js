const body = document.getElementById("value1");

function tambahAngka1() {
  let input = document.getElementById("angka1");
  let value = input.value;
  document.getElementById("value1").innerHTML = value;
}

function tambahAngka2() {
  let input = document.getElementById("angka2");
  let value = input.value;
  document.getElementById("value2").innerHTML = value;
}

function tambahOperator() {
  let operator = document.getElementById("operator").value;

  if (operator === "+") {
    document.getElementById("operasi").innerHTML = "+";
  } else if (operator === "-") {
    document.getElementById("operasi").innerHTML = "-";
  } else if (operator === "x") {
    document.getElementById("operasi").innerHTML = "x";
  } else if (operator === "/") {
    document.getElementById("operasi").innerHTML = "/";
  } else if (operator === "%") {
    document.getElementById("operasi").innerHTML = "%";
  }
}

function hitung() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let operator = document.getElementById("operator").value;
  let hasil;
  if (isNaN(angka1 || isNaN(angka2))) {
    alert("Masukkan angka dengan benar");
  }

  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "x":
      hasil = angka1 * angka2;
      break;
    case "/":
      hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa bagi 0";
      break;
    case "%":
      hasil = angka1 % angka2;
      break;
    default:
      break;
  }
  document.getElementById("hasil").textContent = hasil;
}

function tambahkan() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let operator = document.getElementById("operator").value;

  if (operator === "===") {
    document.getElementById("operasi").innerHTML = "===";
  } else if (operator === "==") {
    document.getElementById("operasi").innerHTML = "==";
  } else if (operator === "!=") {
    document.getElementById("operasi").innerHTML = "!=";
  } else if (operator === "!==") {
    document.getElementById("operasi").innerHTML = "!==";
  } else if (operator === ">=") {
    document.getElementById("operasi").innerHTML = ">=";
  } else if (operator === "<=") {
    document.getElementById("operasi").innerHTML = "<=";
  } else if (operator === ">") {
    document.getElementById("operasi").innerHTML = ">";
  } else if (operator === "<") {
    document.getElementById("operasi").innerHTML = "<";
  }

  document.getElementById("value1").textContent = input1;
  document.getElementById("operator").textContent = operator;
  document.getElementById("value2").textContent = input2;
}

function compare() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let operator = document.getElementById("operator").value;
  let hasil;

  if (operator === "===") {
    hasil = input1 === input2;
  } else if (operator === "==") {
    hasil = input1 == input2;
  } else if (operator === "!=") {
    hasil = input1 != input2;
  } else if (operator === "!==") {
    hasil = input1 !== input2;
  } else if (operator === ">=") {
    hasil = input1 >= input2;
  } else if (operator === "<=") {
    hasil = input1 <= input2;
  } else if (operator === ">") {
    hasil = input1 > input2;
  } else if (operator === "<") {
    hasil = input1 < input2;
  } else {
    alert("Cannot compare");
  }

  document.getElementById("hasil").textContent = hasil;
}
