/**
 * elementBuilder - a function to create and manipulate HTML elements.
 */

function elementBuilder() {
	// elementBuilder contructor function.
}

elementBuilder.prototype.createList = function(element, elementId, listAttribs) {
	var htmlBuild = this.buildSubElements(element, elementId, listAttribs);
	console.log(htmlBuild);

};

/**
 * [createContainer method to create generic HTML elements in the page]
 */
elementBuilder.prototype.createContainer = function(element, elementType, elementId) {
	var parent = document.body;
	if(elementId) {
		parent = document.getElementById(elementId);
	}

	var htmlElement = document.createElement(elementType);
	var iteration;

	element.map(function(obj){
		var text = document.createTextNode(obj['text'] || '');
		iteration = ((Object.keys(obj)).indexOf('iteration') > -1) ? obj['iteration'] : null;
		if(iteration || iteration === 0) {
			delete obj.iteration;
		}

		for(var key in obj) {
			if(key !== 'text') {
				htmlElement.setAttribute(key, obj[key]);
			}
		}
		htmlElement.appendChild(text);
	});

	if(iteration) {
		for(var i = 0; i < iteration; i++) {
			parent.appendChild(htmlElement);
			console.log(htmlElement);
			console.log(parent);
		}
	} else {
		parent.appendChild(htmlElement);
	}

	return parent;
};

elementBuilder.prototype.buildSubElements = function(element, elementId, listAttribs) {
	var parent = document.body;

	if(elementId) {
		parent = document.getElementById(elementId);
	}

	var unorderedList = document.createElement('ul');
	// adding UL properties
	for(var key in listAttribs.ul){
		unorderedList.setAttribute(key, listAttribs.ul[key]);
	}

	element.map(function(obj){
		var list = document.createElement('li');
		// adding LI properties
		for(var key in listAttribs.li){
			list.setAttribute(key, listAttribs.li[key]);
		}


		var anchor = document.createElement('a');
		var text = document.createTextNode(obj['text']);
		anchor.setAttribute("href", obj['url']);

		for(var key in obj) {
			    
		    if(key !== 'text'  && key != 'url') {
		    	anchor.setAttribute(key, obj[key]);
		    }
		}
		anchor.appendChild(text);
	    list.appendChild(anchor);
		unorderedList.appendChild(list);
	});

	parent = parent.appendChild(unorderedList);

	return parent;
	
};

/**
 * [createMedia method to create audio/video elements in page]
 */
elementBuilder.prototype.createMedia = function(type, elementArr){
	var media;

	if(type == 'video'){
		var parent = document.getElementById('videoContainer');
		elementArr.map(function(element){
			var video = document.createElement("video");

			for(var key in element['video']) {
				video.setAttribute(key, element['video'][key]);
			}
			
			(element['source']).map(function(obj){
				var source = document.createElement('source');
				for(key in obj) {
					source.setAttribute(key, obj[key]);
				}
				video.appendChild(source);
				media = video;
			});

			document.body.appendChild(video);
		});
	}
	

	if(type == 'audio') {
		var parent = document.getElementById('audioContainer');
		elementArr.map(function(element){
			var audio = document.createElement("audio");

			for(var key in element['audio']) {
				audio.setAttribute(key, element['audio'][key]);
			}
			
			(element['source']).map(function(obj){
				var source = document.createElement('source');
				for(key in obj) {
					source.setAttribute(key, obj[key]);
				}
				audio.appendChild(source);
				media = audio;
			});

			document.body.appendChild(audio);
		});
	}

	console.log(parent);
	return media;
};

/**
 * [addScript method to add javascripts to the page]
 */
elementBuilder.prototype.addScript = function(element) {
	var parent = document.body;
	element.map(function(obj){
		var script = document.createElement('script');
		for(var key in obj) {
			if(key == 'async') {
				if(obj[key] == true){
					script.setAttribute(key, '');
				}
			} else {
				script.setAttribute(key, obj[key]);
			}
		}
		script.setAttribute('type', 'text/javascript');
		parent.appendChild(script);
	});
	return;
};

/**
 * [addStylesheet method to add stylesheets to the page]
 */
elementBuilder.prototype.addStylesheet = function(element) {
	var parent = document.body;
	element.map(function(obj){
		var link = document.createElement('link');
		for(var key in obj) {
			link.setAttribute(key, obj[key]);
		}
		link.setAttribute('type', 'text/css');
		link.setAttribute('rel', 'stylesheet');
		parent.appendChild(link);
	});
	return;
};

/**
 * [addMeta method to add meta tags to header section of the page]
 */
elementBuilder.prototype.addMeta = function(element) {
	var parent = document.head;
	element.map(function(obj){
		var meta = document.createElement('meta');
		for(var key in obj) {
			meta.setAttribute(key, obj[key]);
		}
		parent.appendChild(meta);
	});
	return;
};