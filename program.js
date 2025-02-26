let body = document.body;

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
  if (isNaN(angka1) || isNaN(angka2)) {
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
  document.getElementById("operasi").textContent = operator;
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

let array = ["buku", "pensil", "pulpen"];
function display() {
  let hasil = document.getElementById("hasil");
  hasil.textContent = "";

  let textArray = document.createElement("h2");
  textArray.textContent = array.map((item) => `"${item}"`).join(", ");
  hasil.appendChild(textArray);
}

if (window.location.pathname.includes("array.html")) {
  display();
}

function pushMethod() {
  let checkbox = document.getElementById("method1");
  let input = document.getElementById("input").value;

  if (checkbox.checked && input) {
    array.push(input);
    display();
  }
}

function popMethod() {
  let checkbox = document.getElementById("method2");

  if (checkbox.checked && array.length > 0) {
    array.pop();
    display();
  }
}

function unShiftMethod() {
  let checkbox = document.getElementById("method3");
  let input = document.getElementById("input").value;

  if (checkbox.checked && input) {
    array.unshift(input);
    display();
  }
}

function shiftMethod() {
  let checkbox = document.getElementById("method4");

  if (checkbox.checked && array.length > 0) {
    array.shift();
    display();
  }
}

function shortMethod() {
  let checkbox = document.getElementById("method6");

  if (checkbox.checked) {
    array.sort();
    display();
  }
}

function tampilString1() {
  let input = document.getElementById("input-string-text1").value;

  let hasil = input.length;
  document.getElementById("string-hasil1").textContent = hasil;
}

function tambahText() {
  let input = document.getElementById("input-string-text2");
  let value = input.value.trim(); // Hapus spasi di awal dan akhir
  document.getElementById("text-string").innerHTML =
    value === "" ? "..." : value;
}

function tampilString2() {
  let input = document.getElementById("input-string-text2").value;
  let index = parseInt(document.getElementById("input-index").value);

  if (isNaN(index || index < 0 || index < input.length)) {
    alert("Masukkan input yang valid");
    return;
  }

  let hasil = input.charAt(index);
  document.getElementById("string-hasil2").textContent = hasil;
}

function tampilString3() {
  let input1 = document.getElementById("input-string-text3").value.trim();
  let input2 = document.getElementById("input-string-text4").value.trim();
  let hasil = input1.concat("", input2);

  // Cek apakah hasil kosong
  document.getElementById("text-string2").textContent =
    hasil === "" ? "..." : hasil;
}

function tambahText2() {
  let inputText = document.getElementById("input-string-text-4").value.trim();
  let inputChar = document.getElementById("input-char").value.trim();

  // Tampilkan teks di <span>
  document.getElementById("text-string-4").innerHTML =
    inputText === "" ? "..." : inputText;

  // Cari posisi karakter dengan indexOf
  let index = inputText.indexOf(inputChar);

  // Tampilkan hasil pencarian
  if (inputChar === "") {
    document.getElementById("string-hasil-4").textContent = "...";
  } else if (index === -1) {
    document.getElementById("string-hasil-4").textContent =
      "Karakter tidak ditemukan.";
  } else {
    document.getElementById(
      "string-hasil-4"
    ).textContent = `Karakter ditemukan di indeks: ${index}`;
  }
}

function tambahText3() {
  let input = document.getElementById("input-string-text-5").value.trim();

  document.getElementById("text-string-5").innerHTML =
    input === "" ? "..." : input;
}

function tampilString4() {
  let indeksAwal = document.getElementById("input-index-1").value;
  let indeksAkhir = document.getElementById("input-index-2").value;
  let input = document.getElementById("input-string-text-5").value.trim();

  if (indeksAwal === "" || indeksAkhir === "") {
    alert("Masukkan indeks yang valid");
    return;
  }

  let hasil = input.substring(indeksAwal, indeksAkhir);
  document.getElementById("string-hasil-5").textContent = hasil;
}
