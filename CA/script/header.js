header = 
'<!--logo and login-->\
<div class="row mx-0">\
    <div class="col-12 col-md-9">\
        <img src="./material/NAHO_logo.png" width="70" height="70" alt="" href="..">\
        NCU Atmospheric and Hydrological Observatory / Cloud&Aerosol\
    </div>\
</div>\
<!--navbar -->\
<nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">\
    <a class="navbar-brand" href="http://naho.atm.ncu.edu.tw/CA/homepage.html"><i class="fas fa-home"></i></a> \
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
    \
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">\
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">\
            <li class="nav-item">\
                <a class="nav-link" href="./test_LAO/32_meter_meteorological_tower.html">測站介紹</a>\
            </li>\
			<li class="nav-item">\
                <a class="nav-link" href="./obsInput.html">人工觀測資料輸入</a>\
            </li>\
            <!--<li class="nav-item dropdown">\
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                    人工觀測\
                </a>\
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
                    <a class="dropdown-item" href="./obsInput.html">觀測資料輸入</a>\
                    <a class="dropdown-item" href="#">人工觀測資料輸入</a>\
                </div>\
            </li>-->\
            <li class="nav-item">\
                <a class="nav-link" href="./history.html">歷史資料</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="./download.html">資料下載</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="./monitoring.html">儀器狀況</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="./memo.html">維護紀錄</a>\
            </li>\
        </ul>\
        <span class="mr-3 text-light"></span>\
        <button type="button" id="logout" class="btn btn-light btn-outline-secondary" onclick="tologout()">登出</button>\
    </div>\
</nav>';
var container = document.getElementById("navigation");
container.innerHTML = header;
function tologout(){
    console.log('logout');
    let uri = 'http://140.115.35.136:8044/cgi-bin/logout.py';
    let data = {
        user:getCookie('User'),
        time:getCookie('Time')
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
        console.log(result);
        setCookie('Name','',-1);
        setCookie('User','',-1);
        setCookie('Time','',-1);
        window.location="http://naho.atm.ncu.edu.tw/CA/homepage.html";
    });

};