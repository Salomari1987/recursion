// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node){
	var nodes = [];
	// if (node === undefined) {
		node = document.body;
	// }	
	for (var i = 0; i < node.childNodes.length ; i++){
		if (typeof node.childNodes[i].classList === 'object'){
				for (var j=0; j<node.childNodes[i].classList.length; j++) {
					if(node.childNodes[i].classList[j] === className){
						nodes.push(node.childNodes[i]);
						break;
					}
				}
		}
		// if (node.childNodes[i].childNodes.length > 0) {
			// getElementsByClassName (className, node.childNodes[i]);
		// }
	}

return nodes;

};
