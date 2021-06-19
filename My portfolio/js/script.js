//sticky navbar
var navBar=document.getElementById("menuwrapper");
var nav=document.getElementById("menubar");
var hide=document.getElementById("hidden");
window.onscroll = function() {
  if (window.pageYOffset <= 599) {
    navBar.classList.add("sticky");
	nav.style.border="none";
	hide.style.display="block";
  } 
  if(window.pageYOffset >= 600){
	  navBar.classList.remove("sticky");
	  navBar.classList.add("bg");
	  nav.style.border="none";
  }
  if(window.pageYOffset <= 600) {
	navBar.classList.add("sticky");
	navBar.classList.remove("bg");
	nav.style.border="none";
	}
  if(window.pageYOffset <= 20){
    navBar.classList.remove("sticky");
	nav.style.borderBottom="1px solid white";
	hide.style.display="none";
  }
}; 
//text animation
var x=["I am a web disgner and devoloper           ",
		"Get my valuable services             ",
		"I am very frofational              "];
var p1=document.getElementById("p1");
var t=[x[0].slice(),x[1].slice(),x[2].slice()];
var p=0;
var u=0;
var j=0;
var i=-1;
setInterval(function(){
	if(p==0){
		t[u]=x[u].slice(0,i);
		p1.innerHTML=t[u];
		i--;
		if(t[u].length==1)
			p=1;
		}
	if(p==1){
		u=1;
		t[u]=x[u].slice(0,j);
		p1.innerHTML=t[u];
		j++;
		if(j==t[u].length+2){
			i=-1;
			p=2;
			j=0;
		}
	}
	if(p==2){
		t[u]=x[u].slice(0,i);
		p1.innerHTML=t[u];
		i--;
		if(t[u].length==1){
			p=3;
		}
	}
	if(p==3){
		u=2;
		t[u]=x[u].slice(0,j);
		p1.innerHTML=t[u];
		j++;
		if(j==t[u].length+2){
			i=-1;
			p=4;
			j=0;
		}
	}
	if(p==4){
		t[u]=x[u].slice(0,i);
		p1.innerHTML=t[u];
		i--;
		if(t[u].length==1){
			p=5;
		}
	}
	if(p==5){
		u=0;
		t[u]=x[u].slice(0,j);
		p1.innerHTML=t[u];
		j++;
		if(j==t[u].length+2){
			i=-1;
			p=0;
			j=0;
		}
	}
},50)
//skills-slider
var img=document.getElementsByClassName("img");
var change=0;
var n=0;
setInterval(function(){
		if(n==0){
			img[change].classList.add("show");
			if(change>0){
				img[change-1].classList.remove("show");
			}
			change++;
		}
		if(change==img.length){
			change=0;
		}
		if(change>0){
			img[img.length-1].classList.remove("show");
		}
	},3000);
	

	
//port folio ovarlay div and plus icon creation
	var gfBox=document.getElementsByClassName("pf-box");
	for(var i=0; i<gfBox.length; i++){
		var createDiv=document.createElement("div");
		createDiv.classList.add("overlay");
		gfBox[i].appendChild(createDiv);
		createDiv.innerHTML="+";
		
		createDiv.setAttribute("onclick","modelShow("+i+");");
	}
	var overLay= document.getElementsByClassName("overlay");
	for(var i=0; i<overLay.length; i++){
		var createp=document.createElement("p");
		overLay[i].appendChild(createp);
		createp.innerHTML="+";
		createp.classList.add("plus");
		}

//portfolio model box

	var pfImg=document.querySelectorAll(".pf-box img");

	var modelImg=document.querySelector("#model-box img");
	var modelH=document.querySelector("#model-box h1");
	var model= document.getElementsByClassName("showHide");
	function modelShow(q){
		model[0].style.display="block";
		model[1].style.display="block";
		model[0].setAttribute("onclick","modelHide();");
		var mm=pfImg[q].src;
		var mn=pfImg[q].alt;
		modelImg.src=mm;
		modelH.innerHTML=mn;
	}
	function modelHide(){
		model[0].style.display="none";
		model[1].style.display="none";
	}


	
		
	


	
	
	
	
	
	

