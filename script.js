var displayData = document.getElementById("akan");
var gender;
var yearOfBirth,cc,yy,mm,dd;
var result = parseInt(result);

function getInput(){
    var yearOfBirth = document.getElementById("year").value;
    var cc = parseInt(yearOfBirth.slice(0,2));
    var yy = parseInt(yearOfBirth.slice(2,4));
    var mm = parseInt(document.getElementById("month").value);
    var dd = parseInt(document.getElementById("date").value);
    console.log(cc);
    console.log(yy);
    console.log(mm);
    console.log(dd);
}


function generateDay(){
    getInput();
    result = ( ( (cc/4)- 2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
        console.log(result);
    confirmGender();
}


function confirmGender(){
    var radios = document.getElementsByName("radio");
    if(radios[0].checked == true) {
        gender = "Male";
    }else if(radios[1].checked == true){
        gender = "Female";
    }else{
        console.log("none is checked");
    }


var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let daysOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]

if (gender == "male" && result == 0){
    displayData.innerHTML = " The day of the week is" +daysOfWeek[0] + "Your akan name is " + akanMale[0];
}
    else if(gender == "male" && result == 1){
            displayData.innerHTML = "The day of the week is:"+ daysOfWeek[1] + "Your akan name is " + akanMale[1];

    }
    else if(gender == "male" && result == 2){
        displayData.innerHTML = "The day of the week is" +daysOfWeek[2] + "Your akan name is " + akanMale[2];

}
else if(gender == "male" && result == 3){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[3] + "Your akan name is " + akanMale[3];

}
else if(gender == "male" && result == 4){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[4] + "Your akan name is " + akanMale[4];

}
else if(gender == "male" && result == 5){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[5] + "Your akan name is " + akanMale[5];

}
else if(gender == "male" && result == 6){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[6] + "Your akan name is " + akanMale[6];

}

if (gender == "female" && result == 0){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[0] + "Your akan name is " + akanFemale[0];
}
    else if(gender == "female" && result == 1){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[1] + "Your akan name is " + akanFemale[1];

    }
    else if(gender == "female" && result == 2){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[2] + "Your akan name is " + akanFemale[2];

}
else if(gender == "female" && result == 3){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[3] + "Your akan name is " + akanFemale[3];

}
else if(gender == "female" && result == 4){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[4] + "Your akan name is " + akanFemale[4];

}
else if(gender == "female" && result == 5){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[5] + "Your akan name is " + akanFemale[5];

}
else if(gender == "male" && result == 6){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[6] + "Your akan name is " + akanFemale[6];
    }
}