var my_number = 5;
console.log(my_number);

var my_string = "hi 1!";

console.log(my_number + my_string);

var my_array = [2, 3, 4];
console.log(my_array);

var my_person = {name:"Emily", age:29, eyes:"brown"};
console.log(my_person);
console.log(my_person.name)

var add = function(number1, number2){
    return number1  + number2;
} 

console.log(add(4,5))

var person= {name: "Katie", age: 22};

var logNameAndAge = function(person) {
    console.log(person.name + " is " + person.age + " years old.")
}

logNameAndAge(person)