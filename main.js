document.title = 'Napis'

const body = document.body

const h1 = document.createElement("h1")
h1.textContent = 'BELAJAR JAVASCRIPT'
const namaSaya = document.createElement("p")
namaSaya.innerHTML = '<marquee>NAFIS IZZAQI</marquee>'
const namaKamu = document.createElement("b")
namaKamu.innerText = 'NUR HIDAYANTI'

body.append(h1)
body.append(namaSaya)
body.append(namaKamu)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

const defaultText = 'Klik saya 1'
btn1.textContent = defaultText

function clickButton(){
    btn1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = 'HAI CEWEK KIW KIW'
    body.append(newText)
}

function ubahText(){
    btn1.textContent = 'hai cewek'
}

function oriText(){
    btn1.textContent = defaultText
}

btn2.style.border = 'none'
btn2.style.padding = '8px'
btn2.style.fontSize = '24px'
btn2.style.background = 'limegreen'

let textElement;

function newText(){
    textElement = document.createElement('p')
    textElement.textContent = 'NAFIS IZZAQI'
    document.body.appendChild(textElement)
    textElement.style.color = 'black'
}

function ubahWarna(){
    textElement.style.color = 'red';
}

