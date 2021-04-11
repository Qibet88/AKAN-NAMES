/*function valdate(){
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
}*/
function dayOfWeek(){
    var yearOfBirth = document.getElementById("year").value;
    var cc = yearOfBirth.slice(0,2);
    var yy = yearOfBirth.slice(2,4);
    var mm = parseInt(document.getElementById("month").value);
    var dd = parseInt(document.getElementById("date").value);
    return ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
}
document.getElementById("month").innerHTML = dayOfWeek();
var result = Math.floor(dayOfWeek().value);
var daysOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
if (Option.value == "male" && result == 0){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanMale[0];
}
    else if(Option.value == "male" && result == 1){
            document.getElementById("akan").innerHTML = "Your akan name is " + akanMale[1];

    }
    else if(Option.value == "male" && result == 2){
        document.getElementById("akan").innerHTML = "Your akan name is " + akanMale[2];

}
else if(Option.value == "male" && result == 3){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanMale[3];

}
else if(Option.value == "male" && result == 4){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanMale[4];

}
else if(Option.value == "male" && result == 5){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanMale[5];

}
else (Option.value == "male" && result == 6){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanMale[6];

}

if (Option.value == "female" && result == 0){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanFemale[0];
}
    else if(Option.value == "female" && result == 1){
            document.getElementById("akan").innerHTML = "Your akan name is " + akanFemale[1];

    }
    else if(Option.value == "female" && result == 2){
        document.getElementById("akan").innerHTML = "Your akan name is " + akanFemale[2];

}
else if(Option.value == "female" && result == 3){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanFemale[3];

}
else if(Option.value == "female" && result == 4){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanFemale[4];

}
else if(Option.value == "female" && result == 5){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanFemale[5];

}
else (Option.value == "male" && result == 6){
    document.getElementById("akan").innerHTML = "Your akan name is " + akanFemale[6];

}

   