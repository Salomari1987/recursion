// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	


	var str = ""
	if (Array.isArray(obj)){
		str = str + '['
		for (var i = 0; i<obj.length; i++) {
				str = str + stringifyJSON(obj[i])
				if (i !== obj.length-1){
					str = str + ","
				}
			}
		str = str + ']';
	} else if (typeof obj === "object" && obj!==null) {
		str = str + '{';
		var counter = 0;
		
			for (var key in obj) {
				 if (counter > 0){
					str = str + ","
				}
				counter ++; 
					str = str + stringifyJSON (key) + ":" + stringifyJSON (obj[key]);
			}
		str = str + '}';
	}
	else if(typeof obj === 'string'){
		str = str + '"' + obj + '"';;
	}  
	else {
		str = str + obj;
	}
 return str;
}