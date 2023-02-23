let income = prompt("შეიყვანეთ ხელფასის ოდენობა");
let result = parseInt(income);

if (result < 500) {
  alert("დაბალი ხელფასი");
} 
else if (result >= 500 && result < 1000) {
  alert("საშუალოზე დაბალი ხელფასი");
} 
else if (result >= 1000 && result < 1500) {
  alert("საშუალო ხელფასი");
} 
else if (result >= 1500 && result < 2000) {
  alert("საშუალოზე მაღალი ხელფასი");
} 
else if (result >= 2000) {
  alert("მაღალი ხელფასი");
}

const numbers = [1,4,18,24,15,2,3,19,55];
// ცარიელი მასივები სადაც გვინდა რომ მოვათავსოთ მიღებული რიცხვები.
const luwi =[];
const kenti=[];

// forEach მეთოდი ამოწმებს number-ის მასივში თითოეულ ელემენტს.
// % ოპერატორი ამოწმებს ნაშთიან გაყოფას.(2 ზე გაყოფისას თუ ნაშთი 0 ია შედეგი გადაგვაქ luwi-ს მასივში push-ით,)
numbers.forEach(function (ricxvi) {
    if (ricxvi % 2 === 0) {   
      luwi.push(ricxvi);
    }
    else {
      kenti.push(ricxvi);
    }
  });
// ნაშთიანი დარჩენილი რიცხვი გადაგვაქ kenti-ის მასივში.


console.log("ლუწი რიცხვებია:" + luwi);
console.log("კენტი რიცხვებია:" + kenti);

