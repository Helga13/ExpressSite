function initiate(){
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');
	var grad = canvas.createLinearGradient(0,0,200,350);
	
		canvas.save();
		canvas.translate(50,70);
		canvas.font = 'bold 20px verdana';
		canvas.fillText('Test',0,30);
		canvas.fillStyle = 'blue';
		canvas.strokeStyle = 'orange';
		canvas.strokeRect(100,100,120,120);
		canvas.fillRect(110,110,100,100);
		canvas.clearRect(120,120,80,80);
		grad.addColorStop(0.3,'yellow');
		grad.addColorStop(0.7,'green');
		canvas.fillStyle = grad;
		canvas.fillRect(10,10,100,100);
		canvas.fillRect(150,10,200,100);
		
		canvas.beginPath();
			canvas.moveTo(200,200);
			canvas.lineTo(300,300);
			canvas.lineTo(200,300);
		canvas.closePath();
		canvas.clip();
		
		canvas.beginPath();
			for( var f=0; f<300; f=f+10 ){
				canvas.moveTo(0,f);
				canvas.lineTo(500,f);
			}	
		canvas.closePath();
		
		canvas.stroke();
		canvas.restore();
		canvas.fillText('Test2',0,30);
		
		canvas.beginPath();
			var radians = 2*Math.PI;
				canvas.arc(50,50,50,0,radians,false);
				canvas.stroke();
		canvas.closePath();
		
		canvas.beginPath();
				canvas.arc(100,400,70,0,Math.PI/180*90,false);
				canvas.stroke();
				
				canvas.lineWidth = 3;
				canvas.lineCap = 'round';
		canvas.beginPath();		
				canvas.moveTo(100,370);
				canvas.lineTo(130,400);
				canvas.stroke();
	
		canvas.beginPath();		
				canvas.moveTo(80,400);
				canvas.lineTo(110,430);
				canvas.stroke();
				
		canvas.beginPath();
				canvas.font = 'bold 20px verdana';
				canvas.textAlign = 'start';
				canvas.fillText('Hello, world!!!',250,400);
				
		canvas.beginPath();									//Картинка
			var img = document.crateElement('img');
				imd.setAttribute('src', 'http://obmenka.by/media/img/we.jpg');
				img.addEventListener('load', function(){
					canvas.drawImage(img, 20, 20);
				});	
				
		canvas.closePath();
};
addEventListener('load', initiate);