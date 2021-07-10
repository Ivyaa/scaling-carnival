header = 
'<!--logo and login-->\
<div class="row mx-0">\
    <div class="col-12 col-md-9">\
        <a href="../Home.html"><img src="./material/NAHO_logo.png" width="70" height="70" alt="" ></a>\
        NCU Atmospheric and Hydrological Observatory / Cloud&Aerosol\
    </div>\
</div>\
<!--navbar -->\
<nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top mx-0">\
    <a class="navbar-brand" href="http://naho.atm.ncu.edu.tw/CA/homepage.html"><i class="fas fa-home"></i></a> \
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
    \
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">\
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">\
            <li class="nav-item dropdown">\
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">測站介紹</a>\
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/10tower.html">10米塔</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/32tower.html">32米氣象塔</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/box.html">百葉箱</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/radiometer.html">輻射計</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/evaporation.html">A型蒸發皿</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/temperaturefe.html">鐵管地溫計</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/temperaturel.html">曲管溫度計</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/bucketraingauge.html">傾斗式雨量儀</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/raingauge.html">雨量筒</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/parsivel.html">一維雷射光學式雨滴譜儀</a>\
                    <a class="dropdown-item" href="http://naho.atm.ncu.edu.tw/CA/introduction/rainjoss.html">撞擊式雨滴譜儀</a>\
                </div>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="./download.html">資料下載</a>\
            </li>\
        </ul>\
        <span class="mr-3 text-light"></span>\
		<button type="button" id="login" class="btn btn-light btn-outline-secondary" onClick="tologin()">登入</button>\
    </div>\
</nav>';
var container = document.getElementById("navigation");
container.innerHTML = header;

function tologin(){
    //window.location="http://naho.atm.ncu.edu.tw/CA/homepage.html";
    window.location='./login.html';
}
