let searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='
let callback = '&callback=?'

var searchButton = document.getElementById("submit");
searchButton.addEventListener("click",search,false);

function search(){
	var container = document.getElementById('container');
	container.setAttribute("style","display:block");
	var valueS = document.getElementById('text').value;
	var search = searchUrl+valueS + callback;
	//console.log(search);
	$.getJSON(search,list_has_arrived);
}
var names = [],info = [];
function list_has_arrived(json){
	for(var i=0;i< 10;i++){
		names.push(json.query.search[i].title);
		info.push(json.query.search[i].snippet);
	}
	display();
}
function display(){
	var output1=document.getElementById("output1");
	output1.innerHTML="";
	for(var i=0;i<5;i++){
		info[i]=checkinfo(info[i]);
		output1.innerHTML+="<a target=\"blank\" href=\"https://en.wikipedia.org/wiki/"+names[i]+"\"><div class=\"box col-md-2\"><span class=\"title\">"+names[i]+"</span><br>"+info[i]+"</div></a>";
	}
	var output2=document.getElementById("output2");
	output2.innerHTML="";
	for(var i=5;i<10;i++){
		info[i]=checkinfo(info[i]);
		output2.innerHTML+="<a target=\"blank\" href=\"https://en.wikipedia.org/wiki/"+names[i]+"\"><div class=\"box col-md-2\"><span class=\"title\">"+names[i]+"</span><br>"+info[i]+"</div></a>";
	}
	//console.log(output1.innerHTML);
}
function checkinfo(arr){
	//To see if the info is incomplete, and if it is, then to add ellipses to it
	if(arr[arr.length-1]!='.'){
		arr+="...";
	}
	return arr;
}