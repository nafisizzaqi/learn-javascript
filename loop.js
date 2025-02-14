// for(let i = 1; i <= 10; i++){
//  console.log('data ke -', i)
// }

// let x = 1
// while (x <= 10) {
//         console.log('data  x ke - ', x)
//     x++
// }

// let y = 1
// do {
//         console.log('data y ke - ', y)
//     y++
// }while (y <= 20)

//TUGAS LOOPING

const x = [3, 5, 12]; 

let total = 0;
for (let i = 0; i < x.length; i++) {
    total += x[i];
}
console.log(total); 


const pacarSaya = ['yuna', 'tisya', 'safna', 'pinkky', 'adikkelas']

console.log(pacarSaya)

for(let pacar of pacarSaya){
    console.log(pacar)
}

pacarSaya.forEach((pacar, index) => {
    console.log(pacar, index)
})
