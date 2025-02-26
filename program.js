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
  let value = input.value.trim();
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

  document.getElementById("text-string2").textContent =
    hasil === "" ? "..." : hasil;
}

function tambahText2() {
  let inputText = document.getElementById("input-string-text-4").value.trim();
  let inputChar = document.getElementById("input-char").value.trim();

  document.getElementById("text-string-4").innerHTML =
    inputText === "" ? "..." : inputText;

  let index = inputText.indexOf(inputChar);

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

  let hasil = input.substring(indeksAwal, indeksAkhir);
  document.getElementById("string-hasil-5").textContent = hasil;
}

function konversiString() {
  let input = document.getElementById("input-number").value;
  let hasil = parseInt(input);

  if (isNaN(hasil)) {
    document.getElementById("hasil-konversi").textContent =
      "Masukkan angka yang valid";
    return;
  }

  let string = hasil.toString();
  document.getElementById(
    "hasil-konversi"
  ).textContent = `Angka dikonversi "${string}"`;
}

document
  .getElementById("input-string1")
  .addEventListener("keypress", function (event) {
    let input = event.target;
    let cursorPos = input.selectionStart;

    if (event.key === '"' || event.key === "'") {
      event.preventDefault();

      let newValue =
        input.value.slice(0, cursorPos) +
        event.key +
        event.key +
        input.value.slice(cursorPos);

      input.value = newValue;

      input.setSelectionRange(cursorPos + 1, cursorPos + 1);
    }
  });

document
  .getElementById("input-string1")
  .addEventListener("keydown", function (event) {
    let input = event.target;
    let cursorPos = input.selectionStart;

    if (event.key === "Backspace" && cursorPos > 0) {
      let value = input.value;

      if (
        (value[cursorPos - 1] === '"' && value[cursorPos] === '"') ||
        (value[cursorPos - 1] === "'" && value[cursorPos] === "'")
      ) {
        event.preventDefault();

        input.value =
          value.slice(0, cursorPos - 1) + value.slice(cursorPos + 1);

        input.setSelectionRange(cursorPos - 1, cursorPos - 1);
      }
    }
  });

function konversiInteger1() {
  let input = document.getElementById("input-string1").value.trim();

  if (!/^["'][0-9]+["']$/.test(input)) {
    document.getElementById("hasil-konversi-1").textContent =
      'Masukkan angka (contoh: "123")';
    return;
  }

  let cleanedInput = input.slice(1, -1);

  let number = Number(cleanedInput);
  document.getElementById("hasil-konversi-1").textContent = number;
}

function konversiInteger2() {
  let input = document.getElementById("input-string2").value.trim();

  let number = parseInt(input);
  document.getElementById("hasil-konversi-2").textContent = number;
}

function konversiFloat() {
  let angka = document.getElementById("input-angkaInteger").value;

  let float = parseFloat(angka);
  let hasil = Number.isInteger(float) ? float.toFixed(1) : float;
  document.getElementById("hasil-konversiFloat").textContent = hasil;
}
