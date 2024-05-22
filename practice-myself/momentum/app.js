/* js 변수 선언(const, let, var) -> var는 사용하지 말라고 함.
const a = 10;
const b = 2;
let myName = "kiho";

console.log(a * b);
console.log(a + b);
console.log(a - b);
console.log("hello " + myName);

myName = "legolas";

console.log("your new name is " + myName);*/

/* 배열
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[3]);*/

// const player = {
//   name: "kiho",
//   points: 10,
//   fat: true,
// };
// console.log(player);
// player.lastName = "potato";
// player.points = player.points + 10;
// console.log(player);

// function

    function plus(a, b) {
        console.log(a + b);
    }
    function divide(a, b){
        console.log(a / b);
    }
    plus(8, 60);
    divide(60, 10);


    const player = {
        name : "Jym Moriaty",
        sayHello : function (otherPerson){
            console.log("Hello! My name is " + otherPerson + ". Are you miss me?")
        },
    };
    console.log(player.name);
    player.sayHello("Jym Moriaty")
    