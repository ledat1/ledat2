var div = document.getElementsByTagName('div'),
	div = div[0];
	var w = 100;
	var h = 100;
	var trangthai = 1;
	var run = setInterval(function() {
		if(trangthai == 1 && w >= 100){
			w++;
			h++;
		}
		if(w == 200){
			trangthai = 2;
		}
		if(trangthai == 2 && w <= 200 ){
			w --;
			h --;
			trangthai;
		}
		if(w <= 100){
			trangthai = 1;
		}
		div.style.width = w + 'px';
		div.style.height = h + 'px';
	},10)