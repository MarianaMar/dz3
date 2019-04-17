// 1. Вивести всі парні числа на проміжку від 0 до 200, використовуючи цикли for, while та do ...while.

const n = 2;
 let iWhile=1;
 let iDo=1;
 let iFor=1;
 while (iWhile <= 200) {
      if (iWhile % n ===0) {
       console.log ("парні числа на проміжку від 0 до 200 ч-з while = ",iWhile);
       } iWhile++;
  }
 
   do {
    if (iDo % n ===0) {
        console.log ("парні числа на проміжку від 0 до 200 ч-з do = ",iDo);
    } iDo++;
  } while (iDo<=200);

 for(let iFor=1; iFor<=200; iFor++){
     if (iFor % n ===0) {
        console.log ("парні числа на проміжку від 0 до 200 ч-з For= ",iFor);
    }
 }


 // 2. Знайти суму чисел кратних на age на проміжку від 0 до 1 000; де age = ваш вік, використати цикли while і for.

  const age = 32;
  let sumWhile = 0 ;
  let sumFor = 0 ;
 
  let i=1;
   while (i<=1000) {
       if (i % age ===0) {
          sumWhile +=age;         
       } i++; 
   }
   console.log ("сума чисел кратних числу", age,"на проміжку від 0 до 1 000 ч-з while = " , sumWhile);
 
   for (let i=1; i<=1000; i++){
      if (i % age ===0) {
          sumFor +=age;
         }
     }
   console.log ("сума чисел кратних числу", age,"на проміжку від 0 до 1 000 ч-з for = " , sumFor);
 
 // 3. Написати функції minNumber() та maxNumber(), яка знаходить найменше та найбільше числа в масиві.

 const list = [2, 5, 4, 1, 3];
      //list.sort(function (a,b){return a-b});
 let nnn = list.length-1;

 function minNumber (array) { 
  //let minfm = Math.min(array);
 // console.log ("мінімальне число масиву (ч-з Math.min)", array, "=", minfm);
   // Math.max.array();
     let min = array[0];
     for (let i=0; i<array.length; i++) {
        if (array[i]< min) {min = array[i];}
     }
   console.log ("мінімальне число масиву (ч-з порівняння)", array, "=", min);
   //return Math.max.array();
   //   array.sort();
   //  let minSort = array[0];
   //  console.log ("мінімальне число масиву (ч-з порівняння) minSort", array, "=", minSort);

 }

 function maxNumber (array) {
     let maxN=1; 
     let max = array[0];
     for (let i=0; i<array.length; i++) {
        if (array[i]> max) {max = array[i];  maxN = i+1} 
     }
  console.log ("максимальне число масиву (ч-з порівняння)", array, "=", max, "з порядковим номером:", maxN);
 }
 minNumber(list);
 maxNumber(list);
 list.sort();

 console.log("мінімальне значення масиву (ч-з sort)):", list[0]);
 console.log("максимальне значення масиву(ч-з sort):", list[nnn]);

 // 4. Написати функцію яка перетворює рядок “Якщо ви не здаєтеся, це має значення” в масив. Використати метод split (перетворює рядок в масив).
 const a = "Якщо ви не здаєтеся, це має значення";
 let aray = a.split (' ');
 console.log(aray);

 // 5. Ввести з клавіатури 12 чисел. Вивести найменше число, порядковий номер найбільшого числа, кількість парних та кількість від’ємних чисел. Використати функції. Числа ввести через кому. UI частина - поле для вводу та кнопка

 function area() {
     let a = document.getElementById('ni').value.split(",").map(Number);
  console.log (a);
  minNumber(a);
  maxNumber(a);
  vidjemni (a);
  parni (a);


  function vidjemni (arrayStr){
      arrayStr.sort();
       let indv=0;
       while(arrayStr[indv]<0) {indv++;}
       console.log("кількість від’ємних чисел = ",indv);
     }
  function parni (arrayStr) {
       let sparni=0;
       for(let indp=0; indp<arrayStr.length; indp++){
           if (arrayStr[indp] % 2 ===0 & arrayStr[indp] !==0 ) 
           {console.log (arrayStr[indp]);sparni++
         }
     }
   console.log("кількість парних  чисел = ",sparni);
 }


 }
 
 
 
 
 
 
 


 







//function minNumber(min){}
   // let min ;
    




// const sidea = 5;
// const h = 4;


// const othersidea = 50;
// const otherh = 44;


// //let s = sidea*h/2;
// //squere (sidea,h);
// console.log(squere (sidea, h));
// console.log(squere (othersidea, otherh));
// console.log(squere (5, 10));


// function squere (a,h)
// {
// return a*h/2;
// }

// function sumPeriod (from, to) {
//     let sum = 0;
//     for( let i = from; i<to; i++ ){
//         sum +=i;
//     }
//     console.log(sum);

// }
// sumPeriod(2,5);
// sumPeriod(0,5);

// sumPeriod(7,5);
// sumPeriod('2',5);
// sumPeriod('fgdfgs',5);
//  const list = ['хліб','молоко', 'сир', 'апельсин' ];
//  const list2 = ['хліб','молоко', 'апельсин' ];

//  const list3 = ['хліб','молоко', 'Aпельсин' ];


//  function createlist (array){
//      for (let i=0; i<array.length; i++) {
//          console.log (`${i}. ${array[i].toUpperCase()}`);

//      }

//  }
//  createlist(list);
//  createlist(list2);
//  createlist(list3);