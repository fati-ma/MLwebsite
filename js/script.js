
function state() {

    var name = prompt("Welcome! Please let us know your name");
    console.log(name);

    var welcome = alert("Hello " + name + "! " + "We hope you like our blog!");
    console.log(welcome);

    var student = prompt(name + " are you a student? (Y/N)");
    console.log(student);

    var fields = '';
    var stateS='';
    var required;
    var stateStudent;

    while (student !== "Y" && student !== "N") {

        required = prompt(name + ", please answer the question with (Y or N) only.")
    }

    if (student == 'Y') {
        stateS = 'Student';
        stateStudent = document.getElementById("stateId");
        stateStudent.textContent = 'You are ' + stateS;

    } else if (student == 'N') {
        stateS = 'Not Student';
        stateStudent = document.getElementById("stateId");
        stateStudent.textContent = 'You are ' + stateS;
    }

    var numberOfFields = prompt('how many fields do you want to know about?');
    for (var i = 0; i < numberOfFields; i++){
        fields = fields + ''+numberOfFields+' is the number of fields '+name+' is interested in...  ';
        fields1 = document.getElementById("fieldsId");
        fields1.textContent = fields;    
    }

    
    console.log(stateS);
    console.log(fields);


}
state();


var opinion = function () {
    document.write('<p>Thank you ' + name + ' for visiting our website!')
}
opinion();


