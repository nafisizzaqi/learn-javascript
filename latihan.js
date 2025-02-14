const hobbies = ["renang", "sepak bola", "poli"]

const hobbyWithCharCount = hobbies.map((result) => `${result}: ${result.length} huruf`)
console.log(hobbyWithCharCount)

const systemBalance = 1_000_000;
const userInvoice = [
    { name: "napis", cash: 20_000 },
    { name: "dapa", cash: 50_000 },
    { name: "ijal", cash: 100_000 },
    { name: "kumar", cash: 45_000 },
    {name: "tio", cash: 5_000}
];

// Cara 1: Menggunakan map() dan reduce()
const totalBalance1 = userInvoice.map(r => r.cash).reduce((prev, current) => prev + current, systemBalance);

const sortedCashOfInvoice = userInvoice.map(r => r.cash).sort((a, b) => a - b)

console.log(totalBalance1); // Output: 1_215_000
console.log(sortedCashOfInvoice);

// const randomQuoteUrl = "https://api.quotable.io/random";
// const listQuoteUrl = "https://api.quotable.io/quotes";

// const fetcher = async (url) => {
//   const api = await fetch(url);
//   const response = await api.json();
//   return response;
// };

// fetcher(randomQuoteUrl).then((r) => console.log(r));
// fetcher(listQuoteUrl).then((r) => console.log(r));


