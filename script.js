function valdate(){
    var dateOfBirth = document.getElementById("date").value;
    if (dateOfBirth < 1 || dateOfBirth > 31);{
    alert("Enter a valid date");
    }
}
function valmonth(){
    var monthOfBirth = document.getElementById("month").value;
    if (monthOfBirth < 1 || monthOfBirth > 12);{
    alert("Enter a valid month")
    }
}
function dayOfWeek(){
    var cc = parseInt(prompt("Please enter Century digit"));
    var yy = parseInt(prompt("Please enter year digit"));
    var mm = parseInt(prompt("Please Enter Month"));
    var dd = parseInt(prompt("Enter Day of month"));
    return ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
}
document.getElementById("month").innerHTML = dayOfWeek();
var x = dayOfWeek().value;
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
if (Option.value == "male" && dayOfWeek == 0){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanMale[0];
}
    else if(Option.value == "male" && dayOfWeek == 1){
            document.getElementById("demo").innerHTML = "Your akan name is " + akanMale[1];

    }
    else if(Option.value == "male" && dayOfWeek == 2){
        document.getElementById("demo").innerHTML = "Your akan name is " + akanMale[2];

}
else if(Option.value == "male" && dayOfWeek == 3){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanMale[3];

}
else if(Option.value == "male" && dayOfWeek == 4){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanMale[4];

}
else if(Option.value == "male" && dayOfWeek == 5){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanMale[5];

}
else (Option.value == "male" && dayOfWeek == 6){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanMale[6];

}
if (Option.value == "female" && dayOfWeek == 0){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanFemale[0];
}
    else if(Option.value == "female" && dayOfWeek == 1){
            document.getElementById("demo").innerHTML = "Your akan name is " + akanFemale[1];

    }
    else if(Option.value == "female" && dayOfWeek == 2){
        document.getElementById("demo").innerHTML = "Your akan name is " + akanFemale[2];

}
else if(Option.value == "female" && dayOfWeek == 3){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanFemale[3];

}
else if(Option.value == "female" && dayOfWeek == 4){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanFemale[4];

}
else if(Option.value == "female" && dayOfWeek == 5){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanFemale[5];

}
else (Option.value == "male" && dayOfWeek == 6){
    document.getElementById("demo").innerHTML = "Your akan name is " + akanFemale[6];

}

   