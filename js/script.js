var name = prompt("Welcome! Please let us know your name");
console.log(name);

var welcome = alert("Hello "+name+"! "+"We hope you like our blog!");
console.log(welcome);

var student = prompt(name+" are you a student? (Y/N)");
console.log(student);

var state;
var required;

if (student == 'Y' || student =='y'){
    state = 'Student';
} else if (student == 'N' || student =='n') {
    state = 'Not Student';
} else{
    required=prompt(name+", please answer the question with (Y/y or N/n).")
}
console.log(state);


