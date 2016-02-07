$(document).ready(function(){

var fizzbuzzArray = [];

for (var i = 1; i <= 100; i++) {
		var val= i;
        
		
		if (val % 3 === 0 && val % 5 !== 0) {
			fizzbuzzArray.push("fizz");
			$(".fizzbuzzoutput").append('<li>fizz</li>');
       	}
		
		else if (val % 5 === 0 && val % 3 !== 0) {
		 $(".fizzbuzzoutput").append('<li>buzz</li>');
		  fizzbuzzArray.push("buzz");
		}
  
 		else if (val % 3 === 0 && val % 5 === 0){
 		$(".fizzbuzzoutput").append('<li>fizzbuzz</li>');		
		  fizzbuzzArray.push("fizzbuzz");
		}

		else {
		  $(".fizzbuzzoutput").append('<li>' + val + '</li>');
		  fizzbuzzArray.push(val);
		}


}
  
});  





