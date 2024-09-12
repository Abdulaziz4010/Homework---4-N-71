// 1-masala

// let n = parseInt(prompt("n ni kiriting (n > m): "));
// let m = parseInt(prompt("m ni kiriting: "));

// let bolinma = 0;
// let qoldiq = n;

// while (qoldiq >= m) {
//     qoldiq -= m;
//     bolinma++;
// }

// console.log("Butun bo'linma: " + bolinma);
// console.log("Qoldiq: " + qoldiq);

// 2-masala

// let n = 12345;
// while (n > 0) {
//     let qoldiq = n % 10;
//     console.log(qoldiq);
//     n = Math.floor(n / 10);
// }

// 3-masala

// let n = 12345;
// let sum = 0;
// let count = 0;

// while (n > 0) {
//     let qoldiq = n % 10;
//     sum += qoldiq;
//     count++;
//     n = Math.floor(n / 10);
// }

// console.log("Raqamlar yig'indisi:", sum);
// console.log("Raqamlar soni:", count);

// 4-masala

// let n = 12345;
// let found = false;

// while (n > 0) {
//   let qoldiq = n % 10;

//   if (qoldiq === 2) {
//     found = true;
//     break;
//   }

//   n = Math.floor(n / 10);
// }

// if (found) {
//   console.log("Raqamlar orasida 2 raqami mavjud.");
// } else {
//   console.log("Raqamlar orasida 2 raqami mavjud emas.");
// }

// 5-masala

// let n = 123456;
// let found = false;

// while (n > 0) {
//     let qoldiq = n % 10;

//     if (qoldiq % 2 !== 0) {
//         hasOddDigit = true;
//         break;
//     }

//     n = Math.floor(n / 10);
// }

// if (found) {
//     console.log("Raqamlar orasida toq raqam mavjud.");
// } else {
//     console.log("Raqamlar orasida toq raqam mavjud emas.");
// }

// 6-masala

// let n = 29;
// let isPrime = true;

// if (n <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log(n + " tub son.");
// } else {
//     console.log(n + " tub son emas.");
// }
//  7-masala

// let a = 17;
// let b = 5;

// let usedLength = 0;
// let count = 0;

// while (usedLength + b <= a) {
//     usedLength += b;
//     count++;
// }

// let Length = a - usedLength;

// console.log("Bo'sh qism uzunligi:", Length);

// 8-masala
// let n = 29;
// let k = 5;

// let c = 0;
// let e = n;

// while (e >= k) {
//    e = e - k;
//     c = c + 1;
// }

// console.log("Butun qismi:", c);
// console.log("Qoldiq:", e);

// 9-masala

// let n = 16;

// let k = 0;
// let current = 1;

// while (current < n) {
//     current = current + current;
//     k = k + 1;
// }

// if (current === n) {
//     console.log("n = 2^" + k);
// } else {
//     console.log(n + " 2 ning darajasi emas.");
// }

// 10-masala

let n = 27;
let current = 1;
let darajasi = false;

while (current <= n) {
  if (current === n) {
    darajasi = true;
    break;
  }
  current = current + current + current;

  if (darajasi) {
    console.log(n + " 3 ning darajasi.");
  } else {
    console.log(n + " 3 ning darajasi emas.");
  }
}
