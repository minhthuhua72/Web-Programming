var email = document.getElementById("mail");
var phoneNumber = document.getElementById("phonenum");
var password = document.getElementById("pw");
var repassword = document.getElementById("rpw");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var address = document.getElementById("address");
var cities = document.getElementById("cities");
var zip = document.getElementById("zip");
var nortification1 = document.getElementById("nortification1");
var countries = document.getElementById("countries");
var owner = document.getElementById("sowner");
var shopper = document.getElementById("shopper");
var bName = document.getElementById("bname");
var sName = document.getElementById("sname");
var category = document.getElementById("sc");
function checkBlank() {
  console.log(email.value, !email.value);
  if (
    !email.value ||
    !phoneNumber.value ||
    !password.value ||
    !repassword.value ||
    !fname.value ||
    !lname.value ||
    !address.value ||
    !cities.value ||
    !zip.value
  ) {

    nortification1.style.display = "block";
    nortification1.innerHTML = "Please fill in the blanks!!!" + "<br/>";
    return false;
  } else if (countries.selectedIndex == 0) {
    nortification1.style.display = "block";

    nortification1.innerHTML = "Please select your country!!!" + "<br/>";
    return false;
  } else if (!owner.checked && !shopper.checked) {
    nortification1.style.display = "block";

    nortification1.innerHTML = "Please select Account type!!!" + "<br/>";
    return false;
  } else {
    
    nortification1.style.display = "none";
    return true;
  }
}

function checkMinMax(idText, minlength) {
  var inputText = document.getElementById(idText);
  var fiele = inputText.value;
  if (fiele.length < minlength) {
    nortification1.style.display = "block";
    nortification1.innerHTML = "Please enter at least 3 characters ";
    return false;
  } else {
    nortification1.style.display = "none";
    return true;
  }
}

function checkMinMaxZip(idZip, minlength, maxlength) {
  var inputZip = document.getElementById(idZip);
  var fieleZip = inputZip.value;
  if (fieleZip.length < minlength || fieleZip.length > maxlength) {
    zip.style.border = "solid 2px red";

    nortification1.style.display = "block";
    nortification1.innerHTML = "Please Zip Code contain 4 to 6 digits. ";
    return false;
  } else {
    nortification1.style.display = "none";
    return true;
  }
}
function checkPassword(){
  var password =document.getElementById('pw')
  var passwordLetter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w]).{8,20}$/;
  if (password.value.match(passwordLetter)){
    nortification1.style.display="none"
      return true
  }else{
    nortification1.style.display= "block"
    nortification1.innerHTML=" Please enter a valid password!!!"
      return false
  }   
}
function checkRePassword(){
    if(password.value == repassword.value){
      nortification1.style.display = "none";
        return true;
        
    }else{
      nortification1.style.display = "block";
      nortification1.innerHTML = "Please correct your repassword ";
        return false
    }
}
function checkEmail(){
  var email = document.getElementById('mail')
  var emailLetter = /^([\w]|\.{3,})+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,5})+$/;
  if (email.value.match(emailLetter)){
    nortification1.style.display="none"
      return true
  }else{
    nortification1.style.display= "block"
    nortification1.innerHTML=" Please enter a valid email!!!"
      return false
}
}


function checkVali() {
    return checkBlank() &&
    checkEmail() &&
    checkPassword() &&
    checkRePassword() &&
    checkMinMax("fname", 3) &&
    checkMinMax("lname", 3) &&
    checkMinMax("address", 3) &&
    checkMinMax("cities", 3) &&
    checkMinMaxZip("zip", 4, 6)    
  }