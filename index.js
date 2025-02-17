// "use strict";
// var nama = 'napis';

// if (true) {
//     var nama = 'dapa';
//     console.log(nama);
//     var proplayer = 'kiboyyyyyy';
//     console.log(proplayer);
// }
// console.log(nama);

// var nama = 'anjay';
// console.log(nama);

// nama = 'napis';
// console.log(nama);
// let nama = 'napis';
// let umur = 17;
// console.log('Nama saya' + nama, 'Umur saya' + umur);
// console.log(`Nama saya ${nama} Umur saya ${umur}`);

// for (let i = 1; i < 5; i++){
//     console.log(i);
//     for(let j = 1; j < 5; i++){
//         console.log(j);
//     }
// }
// for( let makan = 0; makan < 5; makan++){
//     console.log(makan);
// }

// let count = 1;
// while (count < 11) {
//     console.log(count);
//     let reminder = count % 2;
//     if (reminder == 0) {
//         console.log('EVEN')
//     } else {
//         console.log('ODD')
//     }
//     count++;
// }

// for(let i = 1; i <= 3; i++){
//     console.log('ini dari i ',i);
//     for(let j = 1; j <= 3; j++){
//         console.log('ini dari j', j);
//     }
// }

// let i = 1;
// while (i <= 3) {
//     console.log('ini dari i', i);
//     for(let j = 1; j <= 3; j++){
//         console.log('ini dari j', j)
//     }
//     i++;
// }

// for(let i = 0; i < 3; i++){
//     let line = '';
//     for(let j = 0; j < 5; j++){
//         line += '*';
//     }
//     console.log(line);
// }

// var tinggi = 5;
// var panjang = 5;

// for(let row = 0; row < tinggi; row++){
//     var line = '';
//     for(let col = 0; col < panjang; col++){
//         if (row == 0) {
//             line += '*';
//         } else if(row == tinggi - 1){
//             line += '*';
//         } else if (col == 0) {
//             line += '*';
//         } else if (col == panjang - 1) {
//             line += '*';
//         } else {
//             line += ' ';
//         }
//     }
//     console.log(line);
// }

// for (let i = 10, y = 1;  i <= 10, y <= 10, i++; y++) {
//     if(i = 1 && y = 10){
//         break;
//     }
//     console.log('Perulangan i ke - ', i)
//     console.log("Perulangan y ke - ", y);
// }

// function suhuTubuh(suhu){
//     if (suhu > 36) {
//         console.log('anda sakit')
//     } else {
//         console.log('anda sehat')
//     }
//     return suhu;
// }
// suhuTubuh(35);

// function jajan(uang){
//     let padang = 10000;
//     // switch (uang) {
//     //     case 10000:
//     //         console.log('dapat nasi padang')
//     //         break;
//     //     case 9000:
//     //         console.log('yaelah dapat apa duit segitu')
//     //         break;
//     //     default:
//     //         break;
//     // }
//     if (uang >= padang) {
//         console.log('Dapat nasi padang nih')
//     }else {
//         console.log('Yaelah dapat mie goreng aja ni mah')
//     }
//     return uang;
// }
// jajan(1000)

// function hadiah(nama) {
//   let angka = Math.floor(Math.random()* 5) + 1;
//   console.log(`${nama} mendapat angka ${angka}`);
//   switch (angka) {
//     case 1:
//       console.log("dapat mocbil");
//       break;
//     case 2:
//       console.log("dapat hp");
//       break;
//     case 3:
//       console.log("dapat uang");
//       break;
//     case 4:
//       console.log("dapat pacar");
//       break;
//     case 5:
//       console.log("dapat sembako");
//       break;
//     default:
//       console.log("zonk");
//       break;
//   }
//   return angka;
// }
// hadiah('Nafis');

// function echo(msg){
//     return msg;
// }
// console.log(echo('hai'))

// function customMsg(topik, instructor){
//     console.log(topik + ' by ' + instructor)
// }
// customMsg('function lecture', 'Kosasih')

// function checkLogin(nama, password){
//     if (typeof nama != 'string' || typeof password != 'string'){
//         console.log('input salah')
//     }else if (nama != 'nafis' || password != 'n4f1s') {
//         console.log('coba lagi')
//     }else{
//         console.log('login berhasil')
//     }
// }

// checkLogin('nafis', 0)

// let nama = ['nafis', 'dafa', 'yuna', 'safna', 'tisya'];
// nama.slice(0, 2)
// console.log(nama);

// var angka = [1, 2, 3, 4, 5, 6]
// var irisan1 = angka.slice(2, 4)
// console.log(irisan1)
// var irisan2 = angka.slice(1)
// console.log(irisan2)
// var irisan3 = angka.slice(3)
// console.log(irisan3)

// var barang = ['radio', 'televisi', 'kasur', 'kursi']
// barang.splice(2, 2, 'laptop', 'komputer')
// console.log(barang)

// var kalimat = 'hai saya menggunakan whatsapp';
// var kata = kalimat.split(' ')
// console.log(kata)

// let games = ['mobile legends', 'free fire', 'pubg mobile']
// let apk = ['tiktok', 'instagram', 'youtube']

// console.log(apk)

// for(let i = 0; i < games.length; i++){
//     apk[i] = games[i]
// }
// console.log(apk)

// let anak = [
//     ['napis'],
//     ['dafa'],
//     ['ayuna'],
//     ['safna']
// ];
// let angka = [[1,2], [3,4], [5,6]]
// // console.log(angka[1][1])
// // console.log(anak[0][4])

// angka[2].push(6)
// angka[1].pop()
// angka[0].shift()
// console.log(angka)

// let books = [
//     ['Harry potter', 'Jk roling'],
//     ['Demons and Light', 'Marry John'],
//     ['Eloquent', 'Mr bomastic']
// ]

// for(let i = 0; i < books.length; i++){
//     for(let j = 0; j < books[i].length; j++){
//         console.log(books[i][j])
//     }
// }

//for in
// const person = {
//     name:"nafis",
//     age:"17",
//     city:"Ngadirsno"
// };

// for(let key in person){
//     console.log(`${key}:${person[key]}`)
// }

//object.keys
// const person ={
//     name:"dafa",
//     age:"18",
//     city:"Tegalswaton"
// };

// Object.keys(person).forEach(name => {
//     console.log(`${name}: ${person[name]}`);
// })

//object.value
// const game = {
//     name:"mlbb",
//     author:"moonton",
//     age:"8"
// };

// Object.values(game).forEach(value => {
//     console.log(value)
// })

//object.entries = foreach
// const book = {
//     title:"the legends",
//     author:"polar",
//     date:"2009"
// };

// Object.entries(book).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`)
// })

//object.entries = for in
// const school = {
//     name:"SMK 1",
//     addres:"Kembang Sari",
//     construct:"1992"
// };

// for(let [key, value] of Object.entries(school)){
//     console.log(`${key}: ${value}`)
// }

// const name = {nama:"nafis", age:"17"};
// delete name.age;
// console.log(name)

// const superman = {
//   id: "23",
//   name: "Superman",
//   age: "29",
//   hobby: [
//     "sprint",
//     "swimming",
//     {
//       reading: ["comic", "novel"],
//     },
//   ],
//   addres: {
//     home: "planet edorson",
//     brother: "Lazyman",
//   },
// };
// for(let key in superman){
//     console.log(`${key}: ${superman[key]}`)
// }

// Object.keys(superman).forEach(keys => {
//     console.log(`${keys}: ${superman[keys]}`)
// })

// Object.values(superman).forEach(value => {
//     console.log(value)
// })

// Object.entries(superman).forEach(([key, value]) => {
//      console.log(`${key}: ${value}`)
// })

// for(let [key, value] of Object.entries(superman)){
//      console.log(`${key}: ${value}`)
// }

// let drink = {tipe:"kopi", harga:"mahal", tempat:"kota"};
// let newDrink = {}

// Object.keys(drink).forEach(key => {
//     newDrink[key] = drink[key];
// });

// console.log(newDrink)

// let listBarang = {
//     bayam: {jumlah:"50kg", harga:"10000"},
//     kentang: {jumlah:"5kg", harga:"20000"},
//     wortel: {jumlah:"2kg", harga:"16000"},
//     timun: {jumlah:"500gr", harga:"14000"},
//     tomat: {jumlah:"30gr", harga:"18000"}
// };

// console.log(listBarang["kentang"]["jumlah"])
// console.log(listBarang.kentang.harga)

// let nama = {
//   mata: "biru",
// };

// nama["tinggal"] = "gunung";//kurung siku
// nama.menikah = "sudah";//titik .
// let namaBaru = "nama";//dengan varible
// nama[namaBaru] = "cristina";
// console.log(nama);
// console.log(nama);
// console.log(nama);
// console.log(nama);

// let listBarang = {
//     bayam: {jumlah:"50kg", harga:"10000"},
//     kentang: {jumlah:"5kg", harga:"20000"},
//     wortel: {jumlah:"2kg", harga:"16000"},
//     timun: {jumlah:"500gr", harga:"14000"},
//     tomat: {jumlah:"30gr", harga:"18000"}
// };

// let listBelanja = {}
// let keySayurs = Object.keys(listBarang)
// for(let i = 0; i < keySayurs.length; i++){
//     const sayur = keySayurs[i]
//     listBelanja[sayur] = listBarang[sayur]
// }

// listBelanja["kentang"]["harga"] = 100000
// console.log(listBarang["kentang"]["harga"])
// console.log(listBarang)

// let merkHp = {
//     oppo:{warna:"hitam", harga:1_000_000},
//     realme:{warna:"merah", harga:3_000_000},
//     samsung:{warna:"biru", harga:4_500_000},
//     redmi:{warna:"putih", harga:2_500_000}
// }

// // console.log(merkHp)
// let listHp = {}
// let keyHp = Object.keys(merkHp)
// for(let i = 0; i < keyHp.length; i++){
//     const hp = keyHp[i]
//     listHp[hp] = merkHp[hp]
// }

// listHp["realme"]["harga"] = 1_000_000
// console.log(listHp["realme"]["harga"])
// console.log(merkHp)
// console.log(listHp)

let siswa = [
  { nama: "nafis", umur: 17, tinggal: "ngadirno" },
  { nama: "izzaqi", umur: 20, tinggal: "pluto" },
  { nama: "dafa", umur: 16, tinggal: "tegalwatan" },
  { nama: "ayuna", umur: 18, tinggal: "klera" },
];

const namaPanjang = siswa.reduce((terpanjang, current) => {
  return current.nama.length < terpanjang.nama.length ? current : terpanjang;
});
console.log(namaPanjang)

// const nama = siswa.map((n) => n.nama).join(", ");
// console.log(nama);

// const baru = siswa.map(({nama, umur}) => ({nama, umur}));
// console.log(baru)

// const kelas = siswa.map((k) => {
//     if (k.umur <= 16) {
//         return {...k, kelas: "10"}
//     }else if (k.umur >= 17 && k.umur <= 18) {
//         return {...k, kelas: "11"}
//     }else if (k.umur >= 19) {
//         return {...k, kelas: "12"}
//     }
// })
// console.log(kelas)

// const anak = siswa.filter((a) => a.nama.length >= 6);
// console.log(anak)

// const siswa5 = siswa.filter(s => s.nama.length >= 5);
// console.log(siswa5)

// const filter = siswa.filter((s) => s.nama.startsWith("a"));
// console.log(filter)

// const siswaKapital = siswa.map((s) => ({ ...s, nama: s.nama.toUpperCase() }));
// console.log(siswaKapital)

// const tinggal = siswa.filter((t) => t.tinggal.includes("o"));
// console.log(tinggal)

// const totalHuruf = siswa.reduce((total, h) => total + h.nama.length, 0);
// console.log(totalHuruf)

// const cek = siswa.some(cek => cek.umur > 15);
// console.log(cek)

// siswa.sort((a, b) => a.nama.length - b.nama.length);
// console.log(siswa)

// const umur = siswa.filter(anak => anak.umur < 18);
// console.log(umur)

// const nama = siswa.map(n =>n.nama);
// console.log(nama)

// siswa.forEach((anak) => {
//   if (anak.umur >= 18) {
//     anak.status = "dewasa";
//   } else if (anak.umur < 18) {
//     anak.status = "remaja";
//   }
// });
// console.log(siswa);

// console.log(siswa[1].tinggal)
// siswa.forEach(anak => {
//     console.log(`anak yang bernama ${anak.nama} tinggal di ${anak.tinggal}`)
// })

// siswa.push({nama:"safna", umur:"16", tinggal:"mbangsari"})
// console.log(siswa)

// for(let anak of siswa){
//     console.log(`${anak.nama} berumur ${anak.umur}, dan dia tinggal di ${anak.tinggal}`)
// }

// const anak = siswa.filter((anak) => anak.umur === 17);
// console.log(anak)

// siswa.forEach((anak) => {
//   if (anak.nama === "ayuna") {
//     anak.umur = 30;
//     anak.tinggal = "hatiku";
//   }
// });
// console.log(siswa)

// const siswa18 = siswa.some(siswa18 => siswa18.umur === 17 );
// console.log(siswa18)

// const totalUmur = siswa.reduce((total, s) => total + s.umur, 0);
// const rataRata = totalUmur / siswa.length;
// console.log(rataRata)

// let barang = [
//   { nama: "susu", harga: 28_000, merk: "milo" },
//   { nama: "sereal", harga: 34_000, merk: "cococrunch" },
//   { nama: "sabun", harga: 5_000, merk: "shinsui" },
//   { nama: "parfum", harga: 25_000, merk: "axe" },
// ];

// const totalHarga = barang.reduce((total, b) => total + b.harga, 0);
// const rataRata = totalHarga / barang.length;
// console.log(rataRata);

// const barang1 = barang.find((barang1) => barang1.merk === "milo");
// console.log(barang1)
