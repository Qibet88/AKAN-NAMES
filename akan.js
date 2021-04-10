function valdate(){
    var dateOfBirth = document.getElementById("date").value;
    if (isNaN(dateOfBirth) || dateOfBirth < 1 || dateOfBirth > 31);
    alert("Enter a valid date");
}
function valmonth(){
    var monthOfBirth = document.getElementById("month").value;
    if (isNaN(monthOfBirth) || monthOfBirth < 1 || monthOfBirth > 12);
    alert("Enter a valid month")
}