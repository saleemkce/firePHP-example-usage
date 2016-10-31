/**
 * TimeOnSiteTracker.js
 *
 * Time on Site Tracker (TOS)
 * This file tracks time spent on page by user session.
 * It exposes getTimeOnSite() API which gives back time spent so far on page. Call any time to get current page's TOS
 * Provides suppport for blacklisting URL from tracking TOS
 * Measure your user's interaction with site exactly.
 * 
 */

var sitePageStart = new Date(),
    pageEntryTime = (new Date()).toISOString(),
    totalTimeSpent = 0,
    returnInSeconds,
    isTimeOnSiteAllowed = true,
    callback,
    timeSpentArr = [];
    console.log('Time at page entry: ' + sitePageStart);

var TimeOnSiteTracker = function() {
};

TimeOnSiteTracker.getTimeDiff = function(startTime, endTime) {
    var diff;
    return diff = endTime - startTime;
};

TimeOnSiteTracker.addTimeSpent = function(a, b) {
    return a + b;
};

// URL blacklisting from tracking in "Time on site"
TimeOnSiteTracker.checkBlacklistUrl = function(blacklistUrl) {
    var currentPage = document.URL;

    for(var i = 0; i < blacklistUrl.length; i++) {
        if(blacklistUrl[i].indexOf(currentPage) > -1) {
            console.log('Page blacklisted from tracking(TOS) : ' + currentPage);
            return false;
        }
    }

    return true;
};

TimeOnSiteTracker.getTimeOnSite = function() {
    if(timeSpentArr.length) {
        totalTimeSpent = timeSpentArr.reduce(TimeOnSiteTracker.addTimeSpent, 0);
    }
    var currentTime = new Date(),
        newTimeSpent = 0;

    if(returnInSeconds) {
        newTimeSpent = totalTimeSpent + ((TimeOnSiteTracker.getTimeDiff(sitePageStart, currentTime))/1000);
    } else {
        newTimeSpent = totalTimeSpent + (TimeOnSiteTracker.getTimeDiff(sitePageStart, currentTime));
    }

    var site = {};
        site.page = {};
        site.page.URL = document.URL;
        site.page.title = document.title;
        site.page.entryTime = pageEntryTime;
        site.page.timeOnPage = Math.round(newTimeSpent);

    return site;
    
};

TimeOnSiteTracker.start = function(config) {

    if(config && config.trackBy && (config.trackBy.toLowerCase() === 'seconds')) {
         returnInSeconds = true;
    }

    if(config && config.callback) {
        callback = config.callback;
    }

    if(config && config.blacklistUrl && ((config.blacklistUrl) instanceof Array) && (config.blacklistUrl).length) {
       if(!TimeOnSiteTracker.checkBlacklistUrl(config.blacklistUrl)) {
           isTimeOnSiteAllowed = false;
        }
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
            if(document[visibilityState] == 'visible') {
                console.log('on visible');
                sitePageStart = new Date();
                totalTimeSpent = timeSpentArr.reduce(TimeOnSiteTracker.addTimeSpent, 0);
                console.log('Time spent on site so far : ' + totalTimeSpent);

            } else if(document[visibilityState] == 'hidden') {
                console.log('on Invisible');
                var currentTime = new Date();
                if(returnInSeconds) {
                    timeSpentArr.push(((TimeOnSiteTracker.getTimeDiff(sitePageStart, currentTime))/1000));
                } else {
                    timeSpentArr.push(TimeOnSiteTracker.getTimeDiff(sitePageStart, currentTime));
                }
                
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
        console.log('At window/tab close: ' + sitePageStart);

        totalTimeSpent = 0;
        if(timeSpentArr.length) {
            totalTimeSpent = timeSpentArr.reduce(TimeOnSiteTracker.addTimeSpent, 0);
            console.log('time so far : ' + totalTimeSpent);
        }

        var currentTime = new Date();
        if(returnInSeconds) {
            console.log(totalTimeSpent + ((TimeOnSiteTracker.getTimeDiff(sitePageStart, currentTime))/1000));
        } else {
            console.log(totalTimeSpent + (TimeOnSiteTracker.getTimeDiff(sitePageStart, currentTime)));
        }

        console.log('Time at page exit: ' + currentTime);
        /**
         * execute callback if given in config
         */
        if(typeof callback === 'function') {
            var data = TimeOnSiteTracker.getTimeOnSite();
            data.page.exitTime = (new Date()).toISOString();
            if(isTimeOnSiteAllowed) {
                callback(data);
            } else {
                data = {};
                callback(data);
            }
            
        }

        event.returnValue = message;
    }
    return message;
    
};
