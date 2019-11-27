    var oTab = document.getElementById("tab");
    var aH3 = oTab.getElementsByTagName("h3");
    var aDiv = oTab.getElementsByTagName("div");
    var d = document.getElementById('showa');
    var e = document.getElementById('showy');
    var divHeight = d.style.height; 
    d.scrollTop = divHeight;
    var lengg;
    function choose(){
    for (var i = 0; i < aH3.length; i++) {
        aH3[i].index = i;
        aH3[i].onclick = function() {
            for (var i = 0; i < aH3.length; i++) {
                aH3[i].className = "";
                aDiv[i].style.display = "none";
                aDiv[this.index].className = "";
                aDiv[this.index].className = "content";
            }
            this.className = "active";
            aDiv[this.index].style.display = "block";
        };
    }
    }
    choose();   //选项卡 滚动条（已完成）
    function getsj(){
    var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    var arr =[];
    var ars;
    var f;
    var fr = document.getElementsByClassName("lb")[0];
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
            var shuju = JSON.parse(xmlhttp.responseText);
            if(shuju == 0){
            }else{
            for(let i = 0;i<shuju.length;i++)
            {
                ars = shuju[i];
                f = ars[0];
                arr[i] = document.createElement('li');
                arr[i].setAttribute("class","haoyou");
                arr[i].innerHTML = f;
                fr.append(arr[i]);
            }
        }
		}
	}
	xmlhttp.open("GET","show_friend.php",false);
    xmlhttp.send();
    var len = document.getElementsByClassName('lb')[0];
    var lens = len.getElementsByTagName("li");
    lengg = lens.length;
    }
    getsj();   //跳转页面后显示这个人的好友     （怎么获取登录的这个人的账户）
var a = document.getElementsByClassName("hy");
var b = document.getElementsByClassName("lb");
function friendslist(){
for(let i = 0;i<a.length;i++){
    a[i].onclick = function(){
        var c = b[i].style.display;
        if(c =='none'){
            b[i].style.display = "block";
        }else{
            b[i].style.display = "none";
        }
    }
}
}
friendslist();    //点击好友或群聊的分组列表时，关闭/打开  （已完成）
var arrs = [];
var bb = b[0];
var cc = bb.childNodes;
console.log(cc);
function showmesserage(){   
    console.log(lengg);
    for(let f = 1;f < lengg;f++){
        cc[f].onclick = function(){ 
            console.log("a");
            var zhikong = document.getElementById("ren");
            zhikong.innerHTML = "";
            arrs.push(f);
            var data = new FormData();
            data.append("text_a",cc[f]);
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
                    var shuju = JSON.parse(xmlhttp.responseText);
                    information = shuju;
                    var messerage = information.memorize;              
                    var time = information.time;
                    var person = information.person;
                    var person = document.getElementById("ren");
                    var list1 = [];
                    var list2 = [];
                    for(let i = 0;i<messerage.length;i++)
                    {
                        list2[i] = document.createElement("div");
                        list2[i].innerHTML = time[i] + person[i];
                        list2[i].setAttribute('class','distance');
                        person.append(list2[i]);
                        list1[i] = document.createElement('div');
                        list1[i].innerHTML = messerage[i];
                        list1[i].setAttribute('class','qp');
                        person.append(list1[i]);
                    }
                }
            }
            xmlhttp.open("POST","rsa_comm.php",false);//rsa_comm.php
            xmlhttp.send(data);
            var send = document.getElementById("fs");
            send.onclick = function(){
                var atext = document.getElementById("showy").value;
                var senda = document.getElementById("showy");
                var date=new Date();   
                var year=date.getFullYear();   
                var mon=date.getMonth()+1;   
                var da=date.getDate();   
                var day=date.getDay();  
                var h=date.getHours();   
                var m=date.getMinutes();
                if(day = '0'){
                    day = "日";
                }
                var formData = new FormData();
                formData.append("text",atext);
                var request = new XMLHttpRequest();
                request.open("POST","");//rsa_comm.php
                request.send(formData);
                var add = document.getElementById("ren");
                var list1 = document.createElement("div");
                var list2 = document.createElement('div');
                list2.setAttribute('class','distance');
                list2.innerHTML = year + '年' + mon + '月' + da + '日' + '周' + day + ' '+' '+h + ':'+m;
                add.append(list2);
                list1.setAttribute('class','qp');
                list1.innerHTML = atext;
                add.append(list1);
                senda.value = "";
            }
            };
          }
  }
showmesserage();    //点击好友  把被点击的发送给后台 返回与登录用户的聊天记录(已完成)
/*var source = new EventSource("");
source.onmessage = function(event) {
   var shuju = event.data;
   var person = shuju.person;
   var time = shuju.time;
   var messerage = shuju.memorize;
   var lens = arrs.length;
   if(person == arrs[length-1]){
    list2 = document.createElement("div");
    list2.innerHTML = time + person;
    list2.setAttribute('class','distance');
    person.append(list2);
    list1 = document.createElement('div');
    list1.innerHTML = messerage;
    list1.setAttribute('class','qp');
    person.append(list1);
   }else{
    for(let k = 0; k < b.length; k++){
        if(b[k] == person){
            var box = document.createElement('span');
            box.innerHTML = '.';
            box.setAttribute('class','remind');
            b[k].append(box);
        }
    }
   }
};*/
var zhya = document.getElementById("zhy");
var shya = document.getElementById("shy").value;
function czhy(){ 
    var data = new FormData();
    data.append("username",shya);
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
            var shuju = JSON.parse(xmlhttp.responseText);
            information = shuju.data;
            var person = information.people;
            var bol = information.bool;
            var show = document.getElementById("zr");
            var list = [];
            if(bol){
            for(let i = 0;i < person.length;i++){
                list[i] = document.createElement("li");
                list[i].innerHTML = person[i];
                show.append(list[i]);
            }
            }else{
                alert("没有此人！");
            } 
		}
	}
	xmlhttp.open("POST","",true);
    xmlhttp.send(data);
}   //模糊查询   (已完成)
zhya.addEventListener("click",function(){
    var data = new FormData();
    data.append("username",shya);
    var xmlhttpa;
	if (window.XMLHttpRequest)
	{
		xmlhttpa=new XMLHttpRequest();
	}
	else
	{
		xmlhttpa=new ActiveXObject("Microsoft.XMLHTTP");
    }
	xmlhttpa.onreadystatechange=function()
	{
		if (xmlhttpa.readyState==4 && xmlhttpa.status==200)
		{
            var shuju = JSON.parse(xmlhttpa.responseText);
            information = shuju.data;
            var pd = information.ymy;
            if(pd){
                var list1 = document.createElement(li);
                var zr = document.getElementById("zr");
                list1.innerHTML = shya;
                zr.append(list1);
            }else{
                alert("没有找到此人!");
            }
		}
	}
	xmlhttpa.open("POST","",true);
    xmlhttpa.send(data);
})     //准确查询  （已完成）
function jiaren(){
    var person = document.getElementById("sss").value;
    var bb = document.getElementsByClassName("lb");
    var b = bb[0];
    var data = new FormData();
    data.append("add_friend_id",person);
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
            var shuju = JSON.parse(xmlhttp.responseText);
            if(shuju == 0){
                alert("没有找到此人!");
            }else{
                    var list = document.createElement("li");
                    list.innerHTML = shuju;
                    list.setAttribute("class","haoyou");
                    console.log(person);
                    b.append(list);
            }
		}
	}
	xmlhttp.open("POST","add_friend.php",true);
    xmlhttp.send(data);
}
/*var tianjia = document.getElementById("tjj");
tianjia.addEventListener("click",function(){
    var person = document.getElementById("sss").value;
    var bb = document.getElementsByClassName("lb");
    var b = bb[0];
    console.log(b);
    var data = new FormData();
    data.append("user",person);
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
            var shuju = JSON.parse(xmlhttp.responseText);
            information = shuju.data;
            var bol = information.bool;
            if(bol){
                    var list = document.createElement("li");
                    list.innerHTML = person;
                    console.log(person);
                    b.append(list);
            }else{
                alert("没有找到此人!");
            }
		}
	}
	xmlhttp.open("POST","add_friend.php",true);
    xmlhttp.send(data);
}); */  //添加好友  （已完成）
function changes(){
        var refer = document.getElementById("amend");
        refer.style.display = "block";
}
function submit(){
    var list5 = document.getElementById("list1");
    var list6 = document.getElementById("list2");
    var list7 = document.getElementById("list3");
    var list8 = document.getElementById("list4");
    var formData = new FormData();
    formData.append("screenname",list5);
    formData.append("age",list6);
    formData.append("sex",list7);
    formData.append("hobby",list8);
    var request = new XMLHttpRequest();
    request.open("POST","");
    request1.send(formData);
    var refer = document.getElementById("amend");
    refer.style.display = "none";
}
var quxiao = document.getElementById("cancel");
function quxiao(){
    var refer = document.getElementById("amend");
    refer.style.display = "none";
}
