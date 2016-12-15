function result() {

	var cash = document.getElementById('cash').value;
	var back = document.getElementById('back').value / 100 + 1;
	var winRate = document.getElementById('winRate').value;
	var sample = document.getElementById('sample').value;
	var chain = document.getElementById('chain').value;
	var tr = 1;
	var arr = [];

	for (var i = 0; i < sample; i++) {
		var a = Math.random() * 100;
		// if (i == 1) console.log(a);
		cash = cash - tr;

		if ( a >= winRate ) {
			
			if (tr >= chain) {
				tr = 1;
				
			} else {
				tr = tr*2;
			}
		} else {
			cash = (cash + tr*back);
			tr = 1;
		}

		// var div = document.getElementsByTagName('div');

		if (cash > 50) document.div.style.color = 'green';
		else if (cash < 0) document.div.style.color = 'red';
		else document.div.style.color = 'black';

		document.getElementById('result').innerHTML = document.write('<div>' + cash.toFixed(1) + '</div>');

		

		arr.push(cash.toFixed(1) + ' ');

		// console.log(arr[i]); 

	}

	// var timerId = setInterval(function() {
	// 	if (count >= arr.length) clearInterval(timerId);
	// 	var count = 0;
	//	document.getElementById('result').innerHTML = arr;
	// 	count++;

	// }, 100);
	
}