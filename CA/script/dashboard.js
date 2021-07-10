function changeBoard(number,time='oneday'){
    var board=document.getElementById("board")
    if (number==-1){
        jsonObj=JSON.parse(board.getAttribute("data-set"))
        number=jsonObj["type"]
    };
    inactive_navigation_sidebar()
    switch(time){
        case 0:
            time="oneday";
            break;
        case 1:
            time="yesterday";
            break;
        case 2:
            time="threeday";
            break;
        case 3:
            time="sevenday";
            break;
        default:
            time="oneday";
    }
    switch(number){
        case 0:
            board.innerHTML="<img src='./material/plotly/static/{0}.png' class='w-100' alt=''>".format(time);
            document.getElementById("nav_side_board1").classList.add('active')
            document.getElementById("board").dataset.set='{"type":0,"time":0}'
            break;
        case 1:
            board.innerHTML='<iframe src="./material/plotly/dynamic/{0}.html" frameborder="0" class="w-100" id="myChart" height="1500"></iframe> '.format(time);
            document.getElementById("nav_side_board2").classList.add('active')
            document.getElementById("board").dataset.set='{"type":1,"time":0}'
            break;
    };
};

function reload_css(){
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = getRootPath()+"/css/video.css";
    document.getElementsByTagName("head")[0].appendChild(link);
};

function reload_js(){
    var head = $("head").remove("script[role='reload']");
    $("<scri" + "pt>" + "</scr" + "ipt>").attr({ role: 'reload', src: getRootPath()+"/js/video.js", type: 'text/javascript' }).appendTo(head);
};
function nowTime(){
    var time=new Date()
    var timeObj={
        "Year":time.getFullYear(),
        "Month":time.getMonth()+1,
        "Day":time.getDate(),
        "Hour":time.getHours(),
        "Minute":time.getMinutes(),
        "Second":time.getSeconds(),
        "uDate":pad(self.timeObj["Year"],4)+pad(self.timeObj["Month"],2)+pad(self.timeObj["Day"],2),
        "uTime":pad(self.timeObj["Hour"],2)+pad(self.timeObj["Minute"],2)+pad(self.timeObj["Second"],2),
        "Date":pad(self.timeObj["Year"],4)+'/'+pad(self.timeObj["Month"],2)+'/'+pad(self.timeObj["Day"],2),
        "Time":pad(self.timeObj["Hour"],2)+':'+pad(self.timeObj["Minute"],2)+':'+pad(self.timeObj["Second"],2),
        "Datetime":self.timeObj["Data"]+" "+self.timeObj["Time"],
    }
    return timeObj
};
function pad(n, len) {
    let l = Math.floor(len)
    let sn = '' + n
    let snl = sn.length
    if(snl >= l) return sn
    return '0'.repeat(l - snl) + sn
};

String.prototype.format = function () {
    // ?∏Ê??∑Â∫¶?∫Á©∫ÔºåË??ûÁ©∫
    if (arguments.length == 0){
        return this;
    };
 
    // ‰ΩøÁî®Ê≠??Ë°®È?ÂºèÔ?Âæ™Áí∞?øÊ?‰Ωî‰?Á¨¶Êï∏??    
     
    for (var result = this, i = 0; i < arguments.length; i++){
        result = result.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
        return result;
    };
};

function inactive_navigation_sidebar() {
    var navi=document.getElementById("nav_side_board")
    //navi.className = "nav-link"
    for (var i=0; i<navi.childElementCount; i++){
        navi.children[i].children[0].className='nav-link'
    };
};