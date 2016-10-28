/**
 * TimeOnSiteTracker.js
 *
 * This file tracks time spent on page by user session. 
 */

var PEPageStart = new Date(),
	totalTimeSpent = 0,
	returnInSeconds,
	callback,
	timeSpentArr = [];
	console.log('Time at start: ' + PEPageStart);

var TimeOnSiteTracker = function() {
};

TimeOnSiteTracker.getTimeDiff = function(startTime, endTime) {
	var diff;
	return diff = endTime - startTime;
};

TimeOnSiteTracker.addTimeSpent = function(a, b) {
    return a + b;
};

TimeOnSiteTracker.getTimeOnSite = function() {
	if(timeSpentArr.length) {
		totalTimeSpent = timeSpentArr.reduce(TimeOnSiteTracker.addTimeSpent, 0);
	}
	var currentTime = new Date(),
		newTimeSpent = 0;

	if(returnInSeconds) {
		newTimeSpent = totalTimeSpent + ((TimeOnSiteTracker.getTimeDiff(PEPageStart, currentTime))/1000);
		//console.log('time so far : ' + );
	} else {
		newTimeSpent = totalTimeSpent + (TimeOnSiteTracker.getTimeDiff(PEPageStart, currentTime));
	}

	var site = {};
		site.page = {};
		site.page.URL = document.URL;
		site.page.title = document.title;
		site.timeOnPage = Math.round(newTimeSpent);

	return site;
	
};

TimeOnSiteTracker.start = function(config) {

	if(config && config.seconds === true) {
		 returnInSeconds = true;
	}

	if(config && config.callback) {
		callback = config.callback;
	}

	// check the visiblility of the page
    var hidden, visibilityState, visibilityChange;

    if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden', visibilityChange = 'visibilitychange',
        visibilityState = 'visibilityState';
    }
    else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden', visibilityChange = 'mozvisibilitychange',
        visibilityState = 'mozVisibilityState';
    }
    else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden', visibilityChange = 'msvisibilitychange',
        visibilityState = 'msVisibilityState';
    }
    else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden', visibilityChange = 'webkitvisibilitychange',
        visibilityState = 'webkitVisibilityState';
    }


    if (typeof document.addEventListener === 'undefined' || typeof hidden === 'undefined') {
    	return 'BROWSER_UNSUPPORTED';
        // not supported
    }
    else {
        document.addEventListener(visibilityChange, function() {
            switch (document[visibilityState]) {
            case 'visible':
            	console.log('on visible');
            	PEPageStart = new Date();
            	totalTimeSpent = timeSpentArr.reduce(TimeOnSiteTracker.addTimeSpent, 0);
            	console.log('time so far : ' + totalTimeSpent);
				//console.log(timeSpentArr);
                break;
            case 'hidden':
            	console.log('on Invisible');
            	var currentTime = new Date();
    			timeSpentArr.push(((TimeOnSiteTracker.getTimeDiff(PEPageStart, currentTime))/1000));
    			console.log(timeSpentArr);
                break;
            }
        }, false);
    }

};

window.onbeforeunload = function (event) {
    var message = 'Important: Please click on \'Save\' button to leave this page.';
    if (typeof event == 'undefied') {
        event = window.event;
    }
    if (event) {
    	console.log('at close: ' + PEPageStart);

    	totalTimeSpent = 0;
    	if(timeSpentArr.length) {
			totalTimeSpent = timeSpentArr.reduce(TimeOnSiteTracker.addTimeSpent, 0);
			console.log('time so far : ' + totalTimeSpent);
		}

		var currentTime = new Date();
		if(returnInSeconds) {
			console.log(totalTimeSpent + ((TimeOnSiteTracker.getTimeDiff(PEPageStart, currentTime))/1000));
			//console.log('time so far : ' + );
		} else {
			console.log(totalTimeSpent + (TimeOnSiteTracker.getTimeDiff(PEPageStart, currentTime)));
		}

		console.log('Time at end: ' + currentTime);
		/**
		 * execute callback if given in config
		 */
    	if(typeof callback === 'function') {
    		var data = TimeOnSiteTracker.getTimeOnSite();
			callback(data);
		}

        event.returnValue = message;
    }
    return message;
    
};
