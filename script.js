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

