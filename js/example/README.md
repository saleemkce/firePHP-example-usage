# Element Builder

Element Builder is a Javascript file that you can include in your file to add scripts and CSS files with ease with a lot of options.

### Examples
```
var eBuilder = new elementBuilder();
var element = [
	{text:'google', href:'http://plus.google.com', target: '_blank', id:'googleId', class:'', 'data-node':'google_nodes-anchor'},
	{text:'Facebook PLC', href:'http://www.facebook.com', id:'', class:'', 'data-node':'facebook_nodes-anchor'},
	{text:'Linkedin', href:'http://linkedin.com', id:'', class:'Linkedin-class', 'data-node':'linkedin_nodes-anchor'},
];
var elementId = 'anchorContainer';

var listAttribs = {
		ul: {id: 'ulId', 'data-id': 'abc', class:'mongo', style: 'padding:4px;margin:5px;'},
		li:{class: 'bootstrap-init'}
	};

//eBuilder.createList(element, elementId);
eBuilder.createList(element, null, listAttribs);

var element = [
		{0: 'abc', 1: 'url', 2: 'http://www.google.com', 3: 'Google 1 ~data', 4: 'Goog 2', 5: 'Goog 2', 7: 'sddfs', 8: 'sadfsd'},
		{0: 'toc', 1: 'url', 2: 'http://www.facebook.com', 3: 'Facebook', 4: 'Face 2', 5: 'Face 2'}
	];
var html = 
'<div id="~data">'+
	'<span id="~data">'+
		'<ul onclick="addNewScript()">'+
			'<li><a href="#"><span>'+
			'<ul>'+
				'<li>'+
					'<div>~data</div>'+
				'</li>'+
				'<li>'+
					'<div>~data</div>'+
				'</li>'+
				'<li>'+
					'<div>~data</div>'+
				'</li>'+
			'<ul>'+
			'</span></a></li>'+
		'</ul>'+
	'</span>'+
'</div>';
eBuilder.createNestedContainer(element, 'nestedContainer', html);


var element = [
		{src: 'http://localhost:7777/gseservices/assets/frontend/layout/img/logo.png', class:'', 'data-node':'google_nodes-anchor', id: 'id', alt: 'hi, image', iteration: 1}
	];
eBuilder.createContainer(element, 'img', 'dynamicHTMLContainer');

var element = [
		{src: "https://www.google-analytics.com/analytics.js", async: false, charset: 'ISO-8859-1'},
		{src: "https://www.google-analytics.com/abc.js", async: true, charset: 'UTF-8'}
	];
eBuilder.addScript(element);


var element = [
		{href: "http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900&amp;subset=all"},
		{href: "http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Sans+Narrow|Source+Sans+Pro:200,300,400,600,700,900&amp;"}
	];
eBuilder.addStylesheet(element);

var element = [
	{
		video: {height: '500', width:'500', id: 'video-id'}, 
		source: [
			{src: 'http://www.w3schools.com/html/mov_bbb.mp4', type:'video/mp4'},
			{src: 'http://www.w3schools.com/html/mov_bbb.ogg', type:'video/mp4'},
		]
	}
];
eBuilder.createMedia('video', element);


var element = [
	{
		audio: {id: 'audio-id', controls: ''}, 
		source: [
			{src: 'http://www.w3schools.com/html/horse.mp3', type:'video/mp4'},
			{src: 'http://www.w3schools.com/html/horse.ogg', type:'video/mp4'},
		]
	}
];
eBuilder.createMedia('audio', element);


var element = [
		{content: "width=device-width, initial-scale=1.0", name: 'viewport'},
		{'http-equiv': "X-UA-Compatible", content: 'IE=edge,chrome=1'},
		{content: "ABC Shop UI description", name: 'description'},
		{content: "ABC Shop UI keywords", name: 'keywords'}
	];
eBuilder.addMeta(element);
```