// getting data from users and initializing counters

let name = document.getElementById("fname");
let age = document.getElementById("age");
let facemask = document.getElementById("fmask");
 accessAllowed = 0;
 accessDenied = 0;
 total = 0;

/* users have to be 12years or older and with a facemask before 
 they can be grant entry, i put a conditional statement inside the function then call
  onto the function name in the button tag*/
 

function myFunction() {
 	if(age.value >= 12 && facemask.value == "yes") {
		 alert( name.value + "," + "" + "Welcome to SmartieMart");
		 accessAllowed +=1
		 document.getElementById("demo1").innerHTML = "accessALLOWED:" + "<br>" + accessAllowed;
		 total ++
 	}
 	 
 	else if( age.value < 12 && facemask.value == "yes") {
		  alert("You must be 12years or Older to enter SmartieMart");
		  accessDenied +=1
		
		  document.getElementById("demo2").innerHTML =  "accessdENIED:" + "<br>" + accessDenied;
		  total ++

		  
 	}
 	else {
		 alert("Entry Denied into  SmartieMart");
		 accessDenied +=1
		 
		 document.getElementById("demo2").innerHTML =  "accessdENIED:" + "<br>" + accessDenied;
		 total ++
		 
	 }
	 
	
     document.getElementById("demo3").innerHTML =  "total:" + "<br>" + total;
	
 };
   document.getElementById("demo").style.backgroundColor = "#000F14"
