// •Да се напише програма која при внесен произволен број од тастатура ќе испечати на екран дали е позитивен, негативен или нула
let broj = prompt("Vnesi broj");
if (!isNaN(broj) && broj > 0) {
  console.log("Pozitiven broj");
} else if (!isNaN(broj) && broj < 0) {
  console.log("Negativen broj");
} else if (!isNaN(broj) && broj == 0) {
  console.log("Nula");
} else {
  console.log("Nevalidna forma");
}

// •Да се напише програма која ќе го отпечати максимумот од два броја чии вредности се внесуваат од тастатура
let broj1 = prompt("vnesi broj1");
let broj2 = prompt("vnesi broj2");
if (broj1 > broj2) {
  console.log(broj1);
} else {
  console.log(broj2);
}

// Да се напише програма која проверува дали дадена година која се вчитува од тастатура е престапна или не и на екран ќе отпечати соодветна порака
let godina = 2019;
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year";
    }
  } else {
    return "Not leap year.";
  }
}
// Од тастатура се внесуваат координати на една точка.Да се напише програма со која ќе се испечати на кој квадрант или оска припаѓа внесената точка.Ако станува збор за точка која лежи на координатниот почеток, да се испечати соодветна порака.
let xOska = prompt("Vnesi koordinati na x-oska");
let yOska = prompt("Vnesi koordinati po y-oska");
if (xOska > 0 && yOska > 0) {
  console.log("Kvadrant1");
} else if (xOska < 0 && yOska > 0) {
  console.log("Kvadrant2");
} else if (xOska < 0 && yOska < 0) {
  console.log("Kvadrant3");
} else if (xOska > 0 && yOska < 0) {
  console.log("Kvadrant4");
} else if (xOska == 0 && yOska == 0) {
  console.log("Tockata lezi na koordinatniot pocetok");
}
// •Да се напише програма која ќе претставува едноставен калкулатор.Во програмата се вчитуваат два броја и оператор
let broj1 = 5;
let broj2 = 7;
let operator = prompt("Vnesi operator");
if (!isNaN(broj1) && !isNaN(broj2)) {
  switch (operator) {
    case "+":
      console.log(broj1 + broj2);
      break;
    case "-":
      console.log(broj1 - broj2);
      break;
    default:
      console.log("Vnesovte pogresen operator");
  }
}
// Од тастатура се внесуваат три броја кои не мора да се подредени.Внесените броеви претставуваат должини на страните на правоаголен триаголник.Да се напише програма која ќе проверува дали може да се конструира триаголник од дадените должини, при што ако може, треба да се провери дали истиот е правоаголен и да се пресмета неговата плоштина.Во спротивно, треба да се испечати порака дека триаголникот не е правоаголен
let a = 3;
let b = 4;
let c = 5;
let niz = [a, b, c];
console.log(niz.sort());
if (a * a + b * b == c * c) {
  console.log("Pravoagolen triagolnik");
} else {
  console.log("Triagolnikot ne e pravoagolen");
}

// Да се напише програма за пресметување на y = x n за даден природен броj n, n >= 1 и реален броj x
let y = 1;
let x = Number(prompt("Vnesi x"));
let n = Number(prompt("Vnesi n"));
let i = 1;
while (i <= n) {
  y *= x;
  i++;
}
console.log(y);

// •Да се напише програма за пресметување на сумата на сите парни двоцифрени броеви.Добиената сума се печати на екран
let suma = 0;
let i = 10;
while (i <= 98) {
  suma = suma + i;
  i += 2;
}
console.log(suma);

// Да се напише програма коjа од непознат броj на цели броеви кои се внесуваат од тастатура ´ке ги определи двата броjа со наjголеми вредности.Програмата завршува ако наместо броj се внесе знак што не е цифра

var karakter = prompt("Vnesi broj");
let niza = [];
if (isNaN(karakter)) {
  console.log("Vnesovte pogresen broj");
} else {
  while (!isNaN(karakter)) {
    niza.push(karakter);
    karakter = prompt("Vnesi broj");
  }
}
niza.sort();
console.log(niza[niza.length - 1] + " " + niza[niza.length - 2]);
