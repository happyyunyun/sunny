var ById=function(id){
	return document.getElementById(id);
}
var na=ById('ppt').getElementsByTagName('li');
var nu=ById('J').getElementsByTagName('li');
var i=0,len = na.length;
var timer;
var move=function(){
		if(i-1>=0){
			na[i-1].style.display='';
			nu[i-1].style.background="rgba(0,0,0,0.3)";
		}
		if(i>len-1){i=0;}
		na[i].style.display='block';
		nu[i].style.background="rgba(0,0,0,0.6)";
		i++;
		console.log(i);
	}
	move();
var ran=function(){ 
	timer=setInterval(function(){
	move();
},1000);
}
ran();
var stoptime=function(){
	clearInterval(timer);
}
var j=function(r){
	var l=0;
	for(var e=0;e<nu.length;e++){
		if(e==r) {
			t=e;	
		}	
	}
	for(var q=0;q<na.length;q++){
		na[q].style.display="none";
		nu[q].style.background="rgba(0,0,0,0.3)";
	}
	na[t].style.display="block";
	nu[t].style.background="rgba(0,0,0,0.6)";
	i=t;
}
var left=function(){
	var t=i;
	if(t==1){
		na[0].style.display="none";
		nu[0].style.background="rgba(0,0,0,0.3)";
		na[3].style.display="block";
		nu[3].style.background="rgba(0,0,0,0.6)";
		t=4;
	}
	else{
		na[t-1].style.display="none";
		nu[t-1].style.background="rgba(0,0,0,0.3)";
		na[t-2].style.display="block";
		nu[t-2].style.background="rgba(0,0,0,0.6)";
		t=t-1;
		}
		i=t;
}
var right=function(){
	var t=i;
	if(t==4){
		na[3].style.display="none";
		nu[3].style.background="rgba(0,0,0,0.3)";
		na[0].style.display="block";
		nu[0].style.background="rgba(0,0,0,0.6)";
		t=1;
	}
	else{
		na[t-1].style.display="none";
		nu[t-1].style.background="rgba(0,0,0,0.3)";
		na[t].style.display="block";
		nu[t].style.background="rgba(0,0,0,0.6)";
		t=t+1;
		}
		i=t;
}