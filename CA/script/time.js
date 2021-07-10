function getTimeNow() {
	let timenow = new Date(Date.now());
	return timeToString(timenow);
	};
    
function addTime(minute) {
    let timenow = new Date(Date.now());
    timenow = new Date(timenow.setMinutes(timenow.getMinutes()+minute));
    return timeToString(timenow);
};
function timeToString(timenow){
    let yyyy = timenow.getFullYear();
	let mm = timenow.getMonth()+1; //January is 0!
	let dd = timenow.getDate();
	let hh = timenow.getHours();
	let min = timenow.getMinutes();
	if(mm<10){mm='0'+mm;}
	if(dd<10){dd='0'+dd;}
	if(hh<10){hh='0'+hh;}
	if(min<10){min='0'+min;}
	let timeString = yyyy+'-'+mm+'-'+dd+'T'+hh+':'+min;
	
	return timeString;  //"yyyy-MM-ddThh:mm
};
function timeForRequest(str){
    str = str.replace('-','');
    str = str.replace('-','');
    str = str.replace('T','');
    str = str.replace(':','');
    str = str+'00';
    return parseInt(str);
};
function htmlTime(str,format){
    var result = '';
    if(format == '%Y%M%D%h%m%s'){
        let year = str.slice(0,4);
        let month = str.slice(4,6);
        let day = str.slice(6,8);
        let hour = str.slice(8,10);
        let minute = str.slice(10,12)
        result = year+'-'+month+'-'+day+' '+hour+':'+minute;
    };
    return result;  //yyyy-mm-dd hh:mm
};

function sqltime(str,format){
    var result = '';
    if(format == '%Y-%M-%DT%h:%m'){
        let year = str.slice(0,4);
        let month = str.slice(5,7);
        let day = str.slice(8,10);
        let hour = str.slice(11,13);
        let minute = str.slice(14,16)
        result = year+month+day+hour+minute+'00';
    };
    return result;  //yyyymmddhhmmss
}

function datetime(str,format){
    var result = '';
    if(format == '%Y-%M-%DT%h:%m'){
        let year = str.slice(0,4);
        let month = str.slice(5,7);
        let day = str.slice(8,10);
        let hour = str.slice(11,13);
        let minute = str.slice(14,16)
        result =year+'-'+month+'-'+day+' '+hour+':'+minute+':00';
    };
    return result; //yyyy-mm-dd hh:mm:ss
}