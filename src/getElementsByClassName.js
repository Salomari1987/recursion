// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node){
	var nodes = [];
	if (node === undefined) {
		node = document.body;
	}
	if (typeof node.classList === 'object'){
		for (i=0; i<node.classList.length; i++){
			if (node.classList[i]===className){
				nodes.push(node);
				break;
			}
		}
	}
	for (var i = 0; i < node.childNodes.length ; i++){
		if (typeof node.childNodes[i] === 'object'){
			if (node.childNodes[i].childNodes.length > 0) {
				getElementsByClassName (className, node.childNodes[i]);
			}
		}
	}

return nodes;

};
