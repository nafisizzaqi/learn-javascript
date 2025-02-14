

// menentukan hari di pc
const namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
let hari = new Date().getDay()
console.log(`hari ini adalah hari ${namaHari[hari]}`)



//menampilkan saldo akhir dari input user
const saldoAkhir = prompt('masukkan saldo awal anda : ')
alert(saldoAkhir)

//tugas perhitungan 
//luas lingkaran 
function hitungLuasLingkaran(){
    phi = 22/7
    r = 7

    luas = phi * Math.pow(r, 2)
    console.log('luas lingkaran = ', Math.round(luas))
}
hitungLuasLingkaran()
//luas segitiga
function hitungLuasSegitiga(){
    alas = 10
    tinggi = 8

    luas = 1/2 * alas * tinggi
    console.log('luas segitiga = ', luas)
}
hitungLuasSegitiga()
//luas persegi panjang
function hitungluasPersegipanjang(){
    p = 17
    l = 8

    luas = p * l
    console.log('luas persegi panjang = ', luas)
}
hitungluasPersegipanjang()
//luas jajar genjang
function HitungLuasJajarGenjang(){
    alas = 12
    tinggi = 15

    luas = alas * tinggi 
    console.log('luas jajargenjang = ', luas)
}
HitungLuasJajarGenjang()

//saldo akhir dari gaji perbulan 
function gajiPerbulan(){
    let nama = prompt("Masukkan nama anda = ");
    let jmlHariKerja = parseInt(prompt("Masukkan hari anda kerja = "));
    let gajiAwal = parseInt(prompt('Masukkan gaji anda = '))

    let saldoAkhir = Math.floor((gajiAwal / 30) * jmlHariKerja);
    console.log('gaji perbulan dari ', nama, 'adalah', 'Rp' + saldoAkhir.toLocaleString('id-Id'))
} 
gajiPerbulan()

//tugas membuat perulangan variable bertipe array 
let angka = [3, 5, 12]
let total = 0

for(let i = 0; i < angka.length; i++){
    total += angka[i];
}
console.log(angka)
console.log('total nilai adalah ', total, 'karena', angka[0], '+', angka[1], '+', angka[2], '=', total )