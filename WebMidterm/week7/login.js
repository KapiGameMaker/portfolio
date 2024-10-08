window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myRegister");
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	
	var login = [];
    login[0] = document.forms["myLogin"]["username"];
    login[1] = document.forms["myLogin"]["password"];

	var info = [];
	info[0] = document.forms["myRegister"]["username"];

	var passwords = document.forms["myRegister"]["password"];

	if (login[0].value == info[0].value && login[1].value == passwords[0].value){
		alert("Nice"); 
        return true;
    } else {
        alert("Incorrect username or password!"); 
        return false;
    }
}

			