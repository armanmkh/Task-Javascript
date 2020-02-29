function Reg(){
	
	var name=document.getElementById('name');
	var surname=document.getElementById('surname');
    var age=document.getElementById('age');
    var pass=document.getElementById('pass');
    var confpass=document.getElementById('confpass');


    name.style.border="2px solid green";
    surname.style.border="2px solid green"; 
    age.style.border="2px solid green";  
    pass.style.border="2px solid green";
    confpass.style.border="2px solid green";

    if (!name.value) {
    	name.style.border="2px solid red"
    }
    if (name.value.length<3) {
	name.style.border="2px solid red"

    }
    if (name.value.length>20) {
	name.style.border="2px solid red"
	
	}
    if (!surname.value) {
        surname.style.border="2px solid red"
    }
    if (surname.value.length<3) {
    surname.style.border="2px solid red"

    }
    if (surname.value.length>20) {
    surname.style.border="2px solid red"
    
    }
    if (!age.value) {
    age.style.border="2px solid red"
    }
    if (isNaN(age.value)) {
      age.style.border="2px solid red"  
    }

    if (age.value.length>2) {
    age.style.border="2px solid red"
    }

    if (!pass.value) {
    pass.style.border="2px solid red"
    }
    if (!pass.value.length<6) {
    pass.style.border="2px solid red"
    }
    if (!pass.value.length>20) {
    pass.style.border="2px solid red"
    }


    if (!confpass.value) {
    confpass.style.border="2px solid red"
    }
    if (confpass.value!==pass.value) {
    confpass.style.border="2px solid red" 
    }
    else{
        localStorage.setItem("name", name.value);
        localStorage.setItem("password", password.value);
    }






}
function F10(){
    location.href="news.html"
}