var request = new XMLHttpRequest();

var link = "https://script.google.com/macros/s/AKfycbwIdvCma4rM6jDcLzXI5j6Kp5zgLmCE8v3ZyD6-W37r8TiTjdaGk4j-nbWbgFTIxDO6ew/exec?username=";

document.getElementById("login").addEventListener("click",function(){
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	link+=username+"&password="+password;
	request.open("GET",link);
	request.onreadystatechange = function(){
		if(this.readyState==4){
			console.log(this.responseText);
		}else{
			console.log("Not responsed!");
		}
	}
	request.send();
})
