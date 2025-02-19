const body = document.body;

function tambahAngka1() {
  let input = document.getElementById("input1");
  let value = input.value;
  document.getElementById("value1").innerHTML = value;
}

function tambahAngka2() {
  let input = document.getElementById("input2");
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
  let angka1 = parseFloat(document.getElementById("input1").value);
  let angka2 = parseFloat(document.getElementById("input2").value);
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
      break;
    default:
      break;
  }
  document.getElementById("hasil").textContent = hasil;
}
