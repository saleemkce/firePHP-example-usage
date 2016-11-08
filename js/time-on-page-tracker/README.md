# Time on Site Tracker (TOS)
This file tracks time spent on page by user session.

## what can element builder do?
 * This file tracks time spent on page by user session.
 * It exposes getTimeOnSite() API which gives back time spent so far on page. Call any time to get current page's TOS
 * Provides suppport for blacklisting URL from tracking TOS
 * Measure your user's interaction with site directly and accurately.

### Examples
* Include the script in your HTML page.

```
<head>
<script src="TimeOnSiteTracker.js"></script>
</head>
```

### Initialze the TimeOnSiteTracker; track page by milliseconds (default)
```
var config = {
	callback: function(data) {
		window.open('http://www.example.com', 'hi', 'height=200,width=200');
	}};
var Tos = new TimeOnSiteTracker(config);
```

### Track page by seconds
```
var config = {
	trackBy: 'seconds', 
	callback: function(data) {
		window.open('http://www.example.com', 'hi', 'height=200,width=200');
	}};
var Tos = new TimeOnSiteTracker(config);
```

### use call back data "time on site" data
```
var config = {
	trackBy: 'seconds', 
	callback: function(data) {
		console.log(data);
		if(data) {
			window.open('http://www.example.com?URL='+data.URL+'&title='+data.title+'&pageEntryTime='+data.entryTime+'&pageExitTime='+data.exitTime+'&timeOnSite='+data.timeOnPage, 'hi', 'height=200,width=200');
		} else {
			window.open('http://www.example.com', 'hi', 'height=200,width=200');
		}
		
	}};
var Tos = new TimeOnSiteTracker(config);
```

### blacklistUrl parameter
```
var config = {
	trackBy: 'seconds',
	blacklistUrl: ['file:///C:/Users/skhan/Desktop/time.html'],
	callback: function(data) {
		console.log(data);
		if(data) {
			window.open('http://www.example.com?URL='+data.URL+'&title='+data.title+'&pageEntryTime='+data.entryTime+'&pageExitTime='+data.exitTime+'&timeOnSite='+data.timeOnPage, 'hi', 'height=200,width=200');
		} else {
			window.open('http://www.example.com', 'hi', 'height=200,width=200');
		}
		
	}};
var Tos = new TimeOnSiteTracker(config);
```

### Hash-based Url change and routing
```
var config = {
	trackBy: 'seconds',
	trackHashBasedRouting: true, 
	callback: function(data) {
		console.log(data);
		if(data) {
			window.open('http://www.example.com?URL='+data.URL+'&title='+data.title+'&pageEntryTime='+data.entryTime+'&pageExitTime='+data.exitTime+'&timeOnSite='+data.timeOnPage, 'hi', 'height=200,width=200');
		} else {
			window.open('http://www.example.com', 'hi', 'height=200,width=200');
		}
		
	}};
var Tos = new TimeOnSiteTracker(config);
```
