function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem);
	show();
}

function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('keyword').value;
	sessionStorage.setItem(keyword, value);
	show();
}	

function show(){
	var databox = document.getElementById('databox');
	databox.innerHTML = '<input type="button" onclick="removeAll()" value="Delete All" />';
		for(var f=0; f<sessionStorage.length; f++){
			var keyword = sessionStorage.key(f);
			var value = sessionStorage.getItem(keyword);
			databox.innerHTML += '<div><input type="button" onclick="removeKey(\''+keyword+'\')" value="&times;" />'
								+keyword+'-'+value+'</div>';
		}
	//sessionStorage.getItem(keyword);
	//databox.innerHTML = '<div>'+keyword+'-'+value+'</div>';
}	

function removeKey(keyword){
	if(confirm('Are you sure?')){
		sessionStorage.removeItem(keyword);
		show();
	};
}

function removeAll(){
	if(confirm('Are you sure?')){
		sessionStorage.clear();
		show();
	};
}

addEventListener('load', initiate);