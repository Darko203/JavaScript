// // 1. Да се напише програма што ´ке овозможи претворање на двоцифрените броеви во зборови на следниот начин: За двоцифрениот борj 89 на екран ´ке се испечати "osum devet".
// let zborovi = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) console.log(i + "" + j);
// }
// for (zbor of zborovi) {
//   for (zbor1 of zborovi) console.log(zbor, zbor1);
// }

// // 2. Да се напише програма коjа од n броеви(внесени од тастатура) ´ке го определи броjот на броеви што се деливи со 3, при делењето со 3 имаат остаток 1, односно 2. Забелeшка: Задачата да се реши со while, do. . .while и for
// let y = 1;
// let n = prompt("Vnesi broj");
// let niza = [];
// while (n % 3 == 0 || n % 3 == 1) {
//   y = n / 3;
//   niza.push(y);
//   n = y;
// }

// console.log(niza.length);

// // 3. Да се напише програма коjа на екран ´ке ги испечати сите четири - цифрени броеви каj кои збирот на трите наjмалку значаjни цифри е еднаков со наjзначаjната цифра

// for (let i = 1; i < 10; i++) {
//   for (let n = 0; n < 10; n++) {
//     for (let j = 0; j < 10; j++) {
//       for (let z = 0; z < 10; z++)
//         if (n + j + z == i) {
//           console.log(i, n, j, z);
//         }
//     }
//   }
// }

// // 4. Да се напише програма коjа од непознат броj на цели броеви кои се внесуваат од тастатура ´ке ги определи позициите(редните броеви на внесување) на двата последователни броеви кои jа имаат наjголемата сума.Програмата завршува ако едно по друго(последователно) се внесат два негативни цели броjа

// let n = prompt("Vnesi broj");
let j = [];
let p = [];

for (let i = 1; i <= 2; i++) {
  n = prompt("Vnesi broj");
  j.push(n);

  console.log(j);
}
for (let i = 1; i <= 2; i++) {
  n = prompt("Vnesi broj");
  p.push(n);
  console.log(p);
}
let sumaJ = j[0] + j[1];
let sumaP = p[0] + p[1];
if (sumaJ < sumaP) {
  console.log(p);
} else {
  console.log(j);
}

// // 5. Да се напише објект кој ќе содржи повеќе клуч - вредност парови, каде што вредностите ќе бидат од тип стринг, број, низа и објект.

// let ucenik = {
//   ime: "Darko",
//   broj: 5,
//   niza: ["BC", "LA", "MA"],
//   objekt: { predmet: "labelo" },
// };
// for (key in ucenik) {
//   console.log(key + ":" + ucenik[key]);
// }
// console.log(ucenik.objekt.predmet);
// console.log(ucenik);

// //6. Да се напише програма која ќе ги испечати само насловите на книгите од објектот Library

// var library = [
//   {
//     author: "J.K Rowling",
//     title: "Harry Potter and the Philosopher's Stone",
//     readingStatus: true,
//   },
//   {
//     author: "Emily Bronte",
//     title: "Wuthering Heights",
//     readingStatus: true,
//   },
//   {
//     author: "Stieg Larsson",
//     title: "The Girl with the Dragon Tattoo",
//     readingStatus: false,
//   },
// ];

// for (naslovi of library) {
//   console.log(naslovi.author);
// }
