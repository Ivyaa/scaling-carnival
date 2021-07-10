main();
function main(){
    let uri = 'http://140.115.35.136:8044/cgi-bin/test/cookie.py';
    let data = {
        cookies:[getCookie('User'),getCookie('Time')]
    };
    let dataSend = Object.keys(data).map(function (keyName) {
                   return escape(keyName) + '=' + escape(data[keyName])
    }).join('&');

    fetch(uri, {
      method:'POST',
      body:dataSend,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    })
    .then(res => res.text())   
    .catch(error => console.error('Error:', error))
    .then(result => {
        if(result == 1){
            console.log('You have logged in.');
            let con = document.getElementsByTagName('body')[0];
            let script = document.createElement('script');
            script.src = './script/header.js';
            con.appendChild(script);
        }else{
            console.log("You don't log in.");
            let con = document.getElementsByTagName('body')[0];
            let script = document.createElement('script');
            script.src = './script/header_noLogin.js';
            con.appendChild(script);
            if(location.pathname.includes('homepage') || location.pathname.includes('download')||location.pathname.includes('login')){
                
            }else{
                alert('請先登入');
                window.location="http://naho.atm.ncu.edu.tw/CA/login.html";
            };
        };
    });
}

function setCookie(cname,cvalue,exminute){
	var d = new Date();
	d.setTime(d.getTime()+(exminute*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}
/*
function checkCookie(){
	var user=getCookie("username");
	if (user!=""){
		console.log("載入js檔案 no-LOGIN");
		window.location('./index.html');
	}
	else {
		console.log("載入js檔案");
		setCookie("username","haappy",1);
		window.location('./index_test.html');
	}
}
*/
