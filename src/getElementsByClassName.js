// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node){

	var nodes = [];

	node = node || document.body;
	nodeArr = node.childNodes;
	for (var i = 0; i < node.childNodes.length ; i++){
		if (Array.isArray(node.childNodes[i].classList)){
				if(node.childNodes[i].classList[j].className.includes(className)){
					nodes.push(nodes.childNodes[i]);
			}
		}
	}

return nodes;

};
