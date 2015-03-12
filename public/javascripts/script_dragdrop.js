var source1, drop, canvas;
var images = document.querySelectorAll('#picturesbox>img');

for(var i=0; i<images.length; i++){
		images[i].addEventListener('dragstart', dragged);
}

function initiate(){
//	source1 = document.getElementById('image1');
//	source1.addEventListener('dragstart', dragged);
	drop = document.getElementById('dropbox');
	drop = document.getElementById('canvas');
	canvas = drop.getContext('2d');
	drop.addEventListener('dragenter', dragentered);
	drop.addEventListener('dragover', dragovered);
	drop.addEventListener('drop', dropped);
	drop.addEventListener('dragleave', dragleaved);
};

function dragentered(e){
	// предотвращаем действия по умолчанию
	e.preventDefault();
	drop.style.background = 'yellow';
};

function dragovered(e){
	e.preventDefault();
};

/*function dropped(e){
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
	drop.style.background = 'green';
};*/            // При использовании source1

/*function dragged(e){
	var code = "<img src='"+source1.getAttribute('src')+"'/>";
	e.dataTransfer.setData('Text', code);
};*/           // При использовании source1

function dragged(e){
	e.dataTransfer.setData('Text', e.target.getAttribute('id'));
};    // Когда много картинок для перетаскивания

/*function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
//	var src = document.getElementById(id).src;
	drop.innerHTML += "<img src='"+id+"'/>";
}; */   // Когда много картинок для перетаскивания

function dropped(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
	//id.replace('http://localhost:3000/', '');
	console.log(id.replace('http://localhost:3000/', ''));
	//var elem = document.getElementById(id);
	var elem =  document.querySelector('img[src="'+id.replace('http://localhost:3000/', '')+'"]');
	
		console.log(elem);
	var posX = e.pageX - drop.offsetLeft;
	var posY = e.pageY - drop.offsetTop;
	console.log(posX);
	//canvas.drawImage(elem, posX, posY);
	canvas.drawImage(elem, 1, 1);
}; 

function dragleaved(e){
	e.preventDefault();
	drop.style.background = 'red';
};

addEventListener('load', initiate);