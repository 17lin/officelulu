function reflashtime(nowState){
	var dtString = "";
	var dt = new Date();
	dtString = (dt.getMonth()+1) + "月" + dt.getDate()+"日 星期";
	var week ="";
	switch(dt.getDay()) {
		case 1:
			week = "一";
			break;
		case 2:
			week = "二";
			break;
		case 3:
			week = "三";
			break;
		case 4:
			week = "四";
			break;
		case 5:
			week = "五";
			break;
		case 6:
			week = "六";
			break;
		default:
			week = "天";
	};
	dtString = dtString + week;
	dtString = dtString + " "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
	document.getElementById("timestring").innerHTML = dtString;				
	nowState[0] = dt.getDay();
	nowState[1] = dt.getHours();
}