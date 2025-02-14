

// function addName(firstname, lastname) {
//     console.log( 'nama saya adalah : ', firstname, lastname)
// }

// const fullName = new Function('firstname', 'lastname', 'console.log(firstname, lastname)',
// )

// fullName('nafis', 'izzaqi')

// const sum1 = new Function('console.log("ini sum1")')

// function sum2(x, y){
//     console.log(x + y)
// }

// sum2(1, 3)

// const sum3 = (x, y) => {
//     console.log(x + y)
// }

// sum3(4, 6)

// function randomize() {
// const randomNumber = ~~(Math.random() * 1000)
// if (randomNumber > 200) {
//     console.log('Wow lebih dari 200', randomNumber)
// } else if( randomNumber < 200 ) {
//     console.log('Yahh kurang dari 200', randomNumber)
// } else {
//     console.log(randomNumber)
// }
// }

// randomize()

function HitungSegitiga(){
    let alas = parseInt(prompt('Masukkan Alas : '))
    let tinggi = parseInt(prompt('Masukkan Tinggi : '))

    let luas = 0.5 * alas * tinggi 
    console.log('Luas segitiga adalah : ', luas)
}

HitungSegitiga()

function hitungLuasLingkaran() {
    let jarijari = parseInt(prompt('Masukkan Jari-jari : '))
    const PI = 22/7
    // return PI * Math.pow(jariJari, 2);

    let luas =  PI * Math.pow(jarijari, 2)
    console.log('Luas Lingkaran adlah : ', luas)
}

hitungLuasLingkaran()

function hitungluasPersegipanjang(){
    let p = parseInt(prompt('Masukkan Panjang : '))
    let l = parseInt(prompt('Masukkan Lebar : '))

    let luas = p * l
    console.log('Luas Persegi Panjang adalah : ', luas)
}

hitungluasPersegipanjang()

function HitungLuasJajarGenjang(){
    let alas = parseInt(prompt('Masukkan Alas : '))
    let tinggi = parseInt(prompt('Masukkan Tinggi : '))

    let luas = alas * tinggi 
    console.log('Luas Jajar Genjang adalah : ', luas)
}

HitungLuasJajarGenjang()

function totalGaji() {
    let nama = prompt('Masukkan Nama: ');
    let gajiperbulan = parseInt(prompt('Masukkan gaji per bulan: '));
    let jmlharikerja = parseInt(prompt('Masukkan jumlah hari kerja dalam bulan ini: '));

    // Menghitung gaji berdasarkan jumlah hari kerja
    let total = Math.floor((gajiperbulan / 30) * jmlharikerja);

    console.log('Total Gaji: ', nama, 'Rp' + total.toLocaleString());
}

totalGaji();

//menampilkan saldo akhir dari yg diinputkan user
let saldoAwal = Number(prompt('masukkan saldo awal anda: '))

let saldoAkhir = Math.round (saldoAwal / 30)

console.log(saldoAkhir)

//tugas menampilkan hari 
const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
const tanggalHari = new Date()
const namaHari = hari[tanggalHari.getDay()]

console.log(namaHari)




