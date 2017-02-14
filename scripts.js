// FILL IN THE FUNCTIONS BELOW
"use strict";

var sprintFunctions = {
  largestEl: function(array){  
    array.sort(function(a,b) {
    	return b - a;
    });
    return array[0];
  },
  
  reversed: function(string){  
    var revArray = string.split('');
    revArray.reverse();
    return revArray.join('');
  },

  loudSnakeCase: function(string){  
	  string = string[0].toUpperCase() + string.slice(1).toLowerCase();
	  string = string.replace(/\s/g, "_");
	  string = string.replace(/_+/g, "_");
	  string = string.replace(/\W/g, "");
	  string = string.replace(/_\w/g, function(match) {
	    return "_" + match[1].toUpperCase();
	  });
	  return string;
  },

  compareArrays: function(array1, array2){ 
    for ( var i = array1.length - 1; i > 0; i-- ) {
    	if ( array1[i] !== array2[i] ) {
    		return false;
    	}
    	else {
    		return true;
    	}
    }
  },

  fizzBuzz: function(number){
  	var fizzArr = [];
  	for ( var i = 1; i <= number; i++) {
  		fizzArr.push(i);
  	}
  	fizzArr.forEach( function(value, index) {
  		if ( value % 3 === 0 && value % 5 === 0 ) {
  			fizzArr[index] = "FIZZBUZZ";
  		}
  		else if ( value % 3 === 0 ) {
  			fizzArr[index] = "FIZZ";
  		}
  		else if ( value % 5 === 0 ) {
  			fizzArr[index] = "BUZZ";
  		}
  	});
  	return fizzArr;
  },

  myMap: function(array, func){  
    var mappedArr = [];
    array.forEach(function(element) {
    	mappedArr.push(func(element));
    });
    return mappedArr;
  },

  primes: function(number){ 
  	var primeArr = []; 
    for ( var i = 2; i <= number; i++ ) {
    	if ( i % 2 === 0 && i != 2 ) {
    		continue;
    	}
    	else if ( i % 3 === 0 && i != 3 ) {
    		continue;
    	}
    	else if ( i % 5 === 0 && i != 5 ) {
    		continue;
    	}
    	else if ( i % 7 === 0 && i != 7 ) {
    		continue;
    	}
    	else {
    		primeArr.push(i);
    	}
    }
    return primeArr;
  },
};