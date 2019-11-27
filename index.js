var a = document.getElementById("loge");
var dxa = document.getElementById("dx");

var d = document.getElementById("logd");
var e = document.getElementById("zc");
var h = document.getElementById("zcz");
var f = e.style.display;
a.addEventListener("click",function(){
    var b = document.getElementById("loga").value;
    var c = document.getElementById("logb").value;
    var formData = new FormData();
    formData.append("username",b);
    formData.append("password",c);

    var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
            var shuju =xmlhttp.responseText;
            // information = shuju.data;
            var bol = shuju;
            if(bol == 1){
                console.log(1);
    
                var  reseponse = "shouye.html"; 
                window.location.href = reseponse;
            }
		}
	}
	xmlhttp.open("POST","login.php",true);
	xmlhttp.send(formData);
});
d.addEventListener("click",function(){
    e.style.display = "block";
});
var g = document.getElementById("cha");
g.addEventListener("click",function(){
    e.style.display = "none";
});
h.addEventListener("click",function(){
    var formData1 = new FormData();
    var i = document.getElementById("zcc");
    var j = document.getElementById("zzc");
    var k = i.value;
    var m = j.value;
    formData1.append("username1",k);
    formData1.append("password1",m);
    var request1 = new XMLHttpRequest();
    request1.open("POST","signin.php");
    request1.send(formData1);
    alert("恭喜你注册成功！");
    console.log(k);
    console.log(m);
    i.value = "account number";
    j.value = "password";
    e.style.display = "none";
});
