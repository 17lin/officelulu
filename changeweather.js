function changeWeather(nowState){
	var wString = "";
	var ws = 0;
	var weatherbox = [];
	var dt = new Date();	
	switch(dt.getMonth()+1) {
		case 11:
		case 12:
		case 1:
		case 2:
			weatherbox = [6,6,6,6,6,6,6,6,6,6,4,3,3,2,2,2,2,2,1,1];
			break;
		case 3:
		case 4:
		case 5:
			weatherbox = [1,1,1,1,1,1,1,2,2,5,5,3,1,1,1,2,3,4,3,1];
			break;
		case 6:
		case 7:
		case 9:
		case 10:
			weatherbox = [1,1,1,1,1,2,2,2,3,3,3,3,4,4,5,5,5,5,7,7];
			break;
		default:
			wString = "颱風";
	};
	ws = weatherbox[Math.floor(Math.random() *(weatherbox.length - 0) )+ 0];
	switch(ws) {
		case 1:
			wString = " 天氣晴";
			break;
		case 2:
			wString = " 陰陰的";
			break;
		case 3:
			wString = " 小雨";
			break;
		case 4:
			wString = " 大雨";
			break;
		case 5:
			wString = " 烈日";
			break;
		case 6:
			wString = " 乾冷";
			break;
		case 7:
			wString = " 颱風";
			break;
		default:
			wString = " 未知";
	};
	document.getElementById("weatherstring").innerHTML = wString;
	nowState[3] = ws;
}