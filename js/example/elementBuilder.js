/**
 * elementBuilder - a function to create and manipulate HTML elements.
 */

function elementBuilder() {
	// elementBuilder contructor function.
}

elementBuilder.prototype.generate = function(element, elementId) {
	
	// for(var i = 0; i < 5; i++) {
	// 	element.push({text: Math.random(1, 10), url:'http://exmaple.com/?query='+i});
	// }

	var htmlBuild = this.buildSubElements(element, elementId);

	//document.body.appendChild(p);
	console.log(htmlBuild);

};

elementBuilder.prototype.buildSubElements = function(element, elementId) {
	var parent = document.body;

	if(elementId) {
		parent = document.getElementById(elementId);
	}

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
