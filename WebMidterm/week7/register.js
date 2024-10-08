window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var info = [];

    info[0] = document.forms["myRegister"]["firstname"];
    info[1] = document.forms["myRegister"]["lastname"];
    info[2] = document.forms["myRegister"]["gender"];
    info[3] = document.forms["myRegister"]["bday"];
    info[4] = document.forms["myRegister"]["email"];
    info[5] = document.forms["myRegister"]["username"];

    var passwords = document.forms["myRegister"]["password"];

    for (j = 1; j < 6; j++){
        if (!info[j].value){
            alert("Please fill all of the information!"); 
            return false;
        }
    }

    if (passwords[0].value == passwords[1].value){
        alert("Nice");
        return true;
    } else {
        alert("Password and Confirm password aren't the same!"); 
        return false;
    }
}
