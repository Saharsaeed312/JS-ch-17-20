// Question:no:01:
let multiArray = [];
// Question:no:02
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
for( let i = matrix.length-1; i>=0; i--){
    console.log(matrix[i].join(' '));
}
// Question:no:03:
for (var input = 1; input <= 10; input++) {
    console.log(input);
   }
//Question:no:04:
let tabel = parseInt(prompt('Enter a number to show its multiplication'));
let length = parseInt(prompt('Enter the length of multiplication tabel'));
for (let i = 1; i <= length; i++) {
    document.write(`${tabel} x ${i} = ${tabel * i} </br>`);
  }
//Question:no:05:
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let k = 0; k < fruits.length; k++) {
    document.write(`${fruits[k]}<br/>`);
}
for (let i = 0; i < fruits.length; i++) {
    document.write(`Element at index is ${[i]} ${fruits[i]} <br/>`);
}
//   Question:no:06:
// a:
document.write("Counting: </br>");
for (let i = 1; i <= 15; i++) {
    document.write(i + (i < 15 ? ", " : ""));
}
// b:
document.write('Reverse Counting: </br>');
for (let i = 10; i >= 1; i--){
  document.write(i + (i > 1 ? ", " : ""));
}
// c:
document.write("Even Numbers: </br>");
for (let i = 0; i <= 20; i += 2){
  document.write(i + (i < 20 ? ", " : ""));
}
// d:
document.write("Odd Numbers </br>");
for (let i = 1; i < 20; i += 2){
  document.write(i + (i < 19 ? ", " : ""));
}
// E:
document.write("Series");
for (let i = 1; i <= 20; i++){
  document.write((i * 2) + "k" + (i < 20 ? ", " : ""));
}
// Question:no:07:
let items =["cake", 'apple pie', 'cookie', 'chips', 'patties'];
 let user =prompt('Welcome to Abc bakery! What do you want to order Sir / Mam '); 
 let index = items.indexOf(user);
 if( index !== -1){
  alert(`${user} is Avalaible at in this index ${index} in our bakery`);
 }
 else{alert(`We are sorry ${user} is not avalaible`);
}
// Question:no:08:
let a = [24, 53, 78, 91, 12]
let largestNum = Math.max(...a);
document.write(`Array Number ${a}</br>`);
document.write(`The Largest Number is ${largestNum}`);

// Question:no:09:
let b = [24, 53, 78, 91, 12];
let smallestNum = Math.min(...b);
document.write(` Array Number ${b}</br>`);
document.write(`The smallest Number is ${smallestNum}`);

// Question:no:10:
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

 