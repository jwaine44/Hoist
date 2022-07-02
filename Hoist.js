// ONE
// console.log(hello);                                   
// var hello = 'world';                                 
// HOISTING RUN PREDICTION
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';

// Actual output: same as prediction


// TWO
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// HOISTING RUN PREDICTION
// var needle = 'haystack';
// var needle = 'magnet';
// test() is run
// console.log(needle) // logs 'magnet'

// Actual output: same as prediction


// THREE
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// HOISTING RUN PREDICTION
// var brendan = 'super cool';
// console.log(brendan); // logs 'super cool'
// function print() is never called so brendan doesn't equal 'only okay'

// Actual output: same as prediction


// FOUR
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// HOISTING RUN PREDICTION
// var food = 'chicken';
// console.log(food); // logs 'chicken'
// food = 'half-chicken';
// console.log(food); // logs 'half-chicken'

// Actual output: same as prediction


// FIVE
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// HOISTING RUN PREDICTION
// Error: mean() is not a function

// Actual output: same as prediction

// SIX
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// HOISTING RUN PREDICTION
// Error: genre is not defined
// Actual output:
// undefined
// rock
// r&b
// disco

// SEVEN
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// HOISTING RUN PREDICTION
// dojo = "san jose";
// console.log(dojo); // logs "san jose"
// dojo = "seattle";
// console.log(dojo); // logs "seattle"
// var dojo = "burbank"
// console.log(dojo) // logs "burbank"
// dojo = "san jose"
// console.log(dojo) // logs "san jose"

// Actual output: Same as prediction

// EIGHT
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// HOISTING RUN PREDICTION
// const dojo = {};
// dojo.name = name;
// dojo.students = students;
// if dojo.students > 50
// dojo.hiring = true
// else if dojo.students <= 0
// dojo = "closed for now";
// return dojo
// console.log(makeDojo("Chicago", 65)) // logs {Chicago: 65}

// Actual output: TypeError: Assignment to constant variable.