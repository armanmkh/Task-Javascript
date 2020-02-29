var a=0;
var tokos=document.getElementById("tokos");
function F1(){
	var harc1=document.getElementById('harc1');
	var harc2=document.getElementById('harc2');	
	var pat1=document.getElementsByClassName('pat1');	
	if (pat1[0].checked == true || pat1[1].checked == true  || pat1[2].checked == true) {
    harc1.style.display="none";
    harc2.style.display="flex";
}
if (pat1[1].checked == true) {
	a=a+1
}
}


function F2(){
	var harc2=document.getElementById('harc2');
	var harc3=document.getElementById('harc3');	
	var pat2=document.getElementsByClassName('pat2');
	if (pat2[0].checked == true || pat2[1].checked == true || pat2[2].checked == true) {
    harc2.style.display="none";
    harc3.style.display="flex";
}
if (pat2[1].checked == true) {
	a=a+1
}
}

function F3(){
	var harc3=document.getElementById('harc3');
	var harc4=document.getElementById('harc4');	
	var pat3=document.getElementsByClassName('pat3');
	if (pat3[0].checked == true || pat3[1].checked == true || pat3[2].checked == true) {
    harc3.style.display="none";
    harc4.style.display="flex";
}
if (pat3[1].checked == true) {
	a=a+1
}
}


function F4(){
	var harc4=document.getElementById('harc4');
	var harc5=document.getElementById('harc5');	
	var pat4=document.getElementsByClassName('pat4');
	if (pat4[0].checked == true || pat4[1].checked == true || pat4[2].checked == true) {
    harc4.style.display="none";
    harc5.style.display="flex";
}
if (pat4[0].checked == true) {
	a=a+1
}
}

function F5(){
	var harc5=document.getElementById('harc5');
	var harc6=document.getElementById('harc6');	
	var pat5=document.getElementsByClassName('pat5');
	if (pat5[0].checked == true || pat5[1].checked == true || pat5[2].checked == true) {
    harc5.style.display="none";
    harc6.style.display="flex";
}
if (pat5[2].checked == true) {
	a=a+1
}
}

function F6(){
	var harc6=document.getElementById('harc6');
	var harc7=document.getElementById('harc7');	
	var pat6=document.getElementsByClassName('pat6');
	if (pat6[0].checked == true || pat6[1].checked == true || pat6[2].checked == true) {
    harc6.style.display="none";
    harc7.style.display="flex";
}
if (pat6[1].checked == true) {
	a=a+1
}
}

function F7(){
	var harc7=document.getElementById('harc7');
	var harc8=document.getElementById('harc8');	
	var pat7=document.getElementsByClassName('pat7');
	if (pat7[0].checked == true || pat7[1].checked == true || pat7[2].checked == true) {
    harc7.style.display="none";
    harc8.style.display="flex";
if (pat7[1].checked == true) {
	a=a+1
}
    var ardyunq=document.getElementById('ardyunq');
    ardyunq.innerHTML="7 ից "+a;
    var miavor=document.getElementById('miavor');
    miavor.innerHTML="միավոր"

    if (a==0) {
    	
    	tokos.innerHTML="0%"
    }
    if (a==1) {
    	tokos.style.width="14%"
    	tokos.innerHTML="14.3%"
    }
    if (a==2) {
    	tokos.style.width="28%"
    	tokos.innerHTML="28.6%"
    }
    if (a==3) {
    	tokos.style.width="43%"
    	tokos.innerHTML="42.9%"
    }
    if (a==4) {
    	tokos.style.width="57%"
    	tokos.innerHTML="57.2%"
    }
    if (a==5) {
    	tokos.style.width="72%"
    	tokos.innerHTML="71.5%"
    }
    if (a==6) {
    	tokos.style.width="86%"
    	tokos.innerHTML="85.8%"
    }
     if (a==7) {
    	tokos.style.width="100%"
    	tokos.innerHTML="100%"
    }   

}
}