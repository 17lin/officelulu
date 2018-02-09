function showStatus(num){
	firebase.database().ref("p").once('value').then(function(snapshot) {
		var tmp = 0;
		snapshot.forEach(function(childSnapshot) {
			if(tmp == num-1) {
				document.getElementById("placestring").innerHTML = childSnapshot.val();		
			}				
	  });
	});        
}

function changePlace(nowState){
	var pString = "";
	var ps = 0;
	var placebox = [];
	var dt = new Date();	
	switch(dt.getHours()) {
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
			placebox = [1];
			break;
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			placebox = [2];
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			placebox = [2];
			break;
		default:
			pString = "異空間";
	};	
	ps = placebox[Math.floor(Math.random() *(placebox.length - 0) )+ 0];	
	pString = showStatus(ps);
	nowState[2] = ps;
}