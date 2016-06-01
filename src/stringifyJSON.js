// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	// var x = 0;
	// if(Array.isArray(obj)){
	// 	for (var i =0; i<obj.length;i++){
	// 		if(Array.isArray(obj[i])){
	// 			x =2;
	// 		}
	// 		else {

	// 			for (var key in obj[i]){
	// 				if(typeof obj[i][key] === 'function' || obj[i][key]==="undefined"){
	// 					return "{}";
	// 				}
	// 			}
	// 		}
	// 	}
	// }

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
				if ((typeof obj[key] !== 'function') && (obj[key] !== undefined)){ 
					str = str + stringifyJSON (key) + ":" + stringifyJSON (obj[key]);
				}else {
					counter = 0;
				}
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