/**
 * elementBuilder - a function to create and manipulate HTML elements.
 */

function elementBuilder() {
	// elementBuilder contructor function.
}

elementBuilder.prototype.generate = function(element) {
	
	// for(var i = 0; i < 5; i++) {
	// 	element.push({text: Math.random(1, 10), url:'http://exmaple.com/?query='+i});
	// }

	var htmlBuild = this.buildSubElements(element);

	console.log(htmlBuild);

};

elementBuilder.prototype.buildSubElements = function(element) {
	var parent = null;
	parent = document.getElementById('parentContainer');

	element.map(function(obj){
		var subDiv = document.createElement("div");
		var anchor = document.createElement('a');
		var text = document.createTextNode(obj['text']);
		anchor.setAttribute("href", obj['url']);

		for(var key in obj) {
			    
		    if(key !== 'text'  && key != 'url') {
		    	anchor.setAttribute(key, obj[key]);
		    }
		}
		anchor.appendChild(text);
	    subDiv.appendChild(anchor);
		parent.appendChild(subDiv);
	});

	return parent;
	
};
