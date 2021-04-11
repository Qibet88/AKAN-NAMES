var displayData = document.getElementById("akan");
var gender;
var yearOfBirth,cc,yy,mm,dd;
var result;
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let daysOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
var validdate = validateDate();
var validmonth = validateMonth();



function generateDay(){
    yearOfBirth = document.getElementById("year").value;
    cc = parseInt(yearOfBirth.slice(0,2));
    yy = parseInt(yearOfBirth.slice(2,4));
    mm = parseInt(document.getElementById("month").value);
    dd = parseInt(document.getElementById("date").value);
    result = Math.round( ( (cc/4) -2*cc-1) + ( (5*yy/4) ) + ((26*(mm+1)/10) ) + dd)%7;
   
   confirmGender();
     
}
function validateDate(){
if(dd<1 || dd>31){
    return false;
}else {
    return true;
}
}
function validateMonth(){
    if(mm<1 || mm>12){
        return false;
    }else{
        return true;
    }
}



function confirmGender(){
    if(document.getElementsByName("gender").checked){
        gender = document.getElementsByName("gender").value;
    }

if (gender == "male") {
if (result == 0){
    displayData.innerHTML = " The day of the week is" +daysOfWeek[0] + "Your akan name is " + akanMale[0];
}else if(result == 1){
            displayData.innerHTML = "The day of the week is:"+ daysOfWeek[1] + "Your akan name is " + akanMale[1];
}else if(result == 2){
        displayData.innerHTML = "The day of the week is" +daysOfWeek[2] + "Your akan name is " + akanMale[2];
}else if(result == 3){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[3] + "Your akan name is " + akanMale[3];
}else if(result == 4){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[4] + "Your akan name is " + akanMale[4];
}else if(result == 5){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[5] + "Your akan name is " + akanMale[5];
}else if(result == 6){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[6] + "Your akan name is " + akanMale[6];
}
}else if (gender == "female"){ 
}if (result == 0){
    displayData.innerHTML = "The day of the week is "  +daysOfWeek[0] +  " Your akan name is  "  + akanFemale[0];
}else if(result == 1){
    displayData.innerHTML = "The day of the week is"  +daysOfWeek[1] +  "Your akan name is " + akanFemale[1];
}else if(result == 2){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[2] + "Your akan name is " + akanFemale[2];
}else if(result == 3){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[3] + "Your akan name is " + akanFemale[3];
}else if(result == 4){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[4] + "Your akan name is " + akanFemale[4];
}else if(result == 5){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[5] + "Your akan name is " + akanFemale[5];
}else if(result == 6){
    displayData.innerHTML = "The day of the week is" +daysOfWeek[6] + "Your akan name is " + akanFemale[6];
    }
}