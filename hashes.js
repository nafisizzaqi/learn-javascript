// var numberOfHashes = 7;
// var counter = 0;
// var hashes = '';

// while(counter < numberOfHashes){
//     hashes = hashes + '#';
//     counter = counter + 1;
// }
// console.log(hashes);

function printHashes(numberOfHashes) {
    let hashes = '';
    let counter = 0;
  while (counter < numberOfHashes) {
    hashes += "#";
    counter = counter + 1;
  }
  console.log(hashes);
}

for(let i = 1; i < 10; i++ ){
    printHashes(3);
}

// function checkLogin(username, password){
//     if (typeof username != 'string' || typeof password != 'string' ) {
//         console.log('input salah')
//     }else if (username != 'napis' || password != 'napiss'){
//         console.log('coba lagi')
//     }else {
//         console.log('login berhasil')
//     }
// }

// checkLogin('napis', 'napiss');
