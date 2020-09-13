// Напишете функција за пресметување на факториел на некој број

function factoriel(x) {
  let br = 1;
  for (i = 1; i <= x; i++) {
    br *= i;
  }
  console.log(br);
}
factoriel(5);

// Напишете функција која враќа количник на два броја. Ако вториот број е 0 потребно е да врати -1 и да испечати грешка
let res = 1;
function kolicnik(n, m) {
  if (m == 0) {
    return (res = -1);
  } else {
    return (res = n / m);
  }
}
kolicnik(6, 0);
if (res == -1) {
  console.log("Greska");
} else {
  console.log(res);
}

// 3. Да се напише функција за печатење на листа во html со користење на низа како параметар и истата да се искористи за креирање на неколку листи.

let niza1 = [
  {
    ДРЖАВИ: "EUR",
    КУПОВЕН: "61.3500",
    СРЕДЕН: "61.6950",
    ПРОДАЖЕН: "61.8000",
  },
  {
    ДРЖАВИ: "TRY",
    КУПОВЕН: "6.3000",
    СРЕДЕН: "6. 9661",
    ПРОДАЖЕН: "7. 8000",
  },
  {
    ДРЖАВИ: "USD",
    КУПОВЕН: "51.3000",
    СРЕДЕН: "52.0457",
    ПРОДАЖЕН: "53.0000",
  },
];
let niza2 = [
  {
    ДРЖАВИ: "GBP",
    КУПОВЕН: "66.0000",
    СРЕДЕН: "66.7623",
    ПРОДАЖЕН: "67.6000",
  },
  {
    ДРЖАВИ: "CHF",
    КУПОВЕН: "56.5000",
    СРЕДЕН: "57.2469",
    ПРОДАЖЕН: "58.0000",
  },
  {
    ДРЖАВИ: "SEK",
    КУПОВЕН: "5.7000",
    СРЕДЕН: "5.9486",
    ПРОДАЖЕН: "6.2000",
  },
];
let tabela = document.querySelector("#table");
let prvRed = document.createElement("tr");
for (key in niza1[0]) {
  let th = document.createElement("th");
  th.innerHTML = key;
  prvRed.appendChild(th);
}
tabela.appendChild(prvRed);
function createTable(niza) {
  let tabela = document.querySelector("#table");

  for (ime of niza) {
    let red = document.createElement("tr");
    for (key in ime) {
      let td = document.createElement("td");
      td.innerHTML = ime[key];
      red.appendChild(td);
    }
    tabela.appendChild(red);
  }
}
createTable(niza1);
createTable(niza2);
