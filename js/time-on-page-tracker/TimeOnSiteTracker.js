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

var TimeOnSiteTracker = function(config) {
    
    this.sitePageStart = new Date(),
    this.pageEntryTime = (new Date()).toISOString(),
    this.totalTimeSpent = 0,
    this.returnInSeconds,
    this.isTimeOnSiteAllowed = true,
    this.callback,
    this.timeSpentArr = [];
    console.log('Time at page entry: ' + this.sitePageStart);

    // bind to window close event
    this.bindWindowUnload();

    // bind to focus/blur window state
    this.bindWindowFocus();

    if(config && config.trackBy && (config.trackBy.toLowerCase() === 'seconds')) {
         this.returnInSeconds = true;
    }

    if(config && config.callback) {
        this.callback = config.callback;
    }

    if(config && config.blacklistUrl && ((config.blacklistUrl) instanceof Array) && (config.blacklistUrl).length) {
       if(!this.checkBlacklistUrl(config.blacklistUrl)) {
           this.isTimeOnSiteAllowed = false;
        }
    }

};

TimeOnSiteTracker.prototype.getTimeDiff = function(startTime, endTime) {
    var diff;
    return diff = endTime - startTime;
};

TimeOnSiteTracker.prototype.addTimeSpent = function(a, b) {
    return a + b;
};

TimeOnSiteTracker.prototype.arrayAggregate = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum +  arr[i];
    }

    return sum;
};

// URL blacklisting from tracking in "Time on site"
TimeOnSiteTracker.prototype.checkBlacklistUrl = function(blacklistUrl) {
    var currentPage = document.URL;

    for(var i = 0; i < blacklistUrl.length; i++) {
        if(blacklistUrl[i].indexOf(currentPage) > -1) {
            console.log('Page blacklisted from tracking(TOS) : ' + currentPage);
            return false;
        }
    }

    return true;
};

TimeOnSiteTracker.prototype.getTimeOnSite = function() {
    if(this.timeSpentArr.length) {
        this.totalTimeSpent =  this.arrayAggregate(this.timeSpentArr);
    }
    var currentTime = new Date(),
        newTimeSpent = 0;

    if(this.returnInSeconds) {
        newTimeSpent = this.totalTimeSpent + ((this.getTimeDiff(this.sitePageStart, currentTime))/1000);
    } else {
        newTimeSpent = this.totalTimeSpent + (this.getTimeDiff(this.sitePageStart, currentTime));
    }

    var site = {};
        site.page = {};
        site.page.URL = document.URL;
        site.page.title = document.title;
        site.page.entryTime = this.pageEntryTime;
        site.page.timeOnPage = Math.round(newTimeSpent);

    return site;
    
};

TimeOnSiteTracker.prototype.bindWindowFocus = function() {
    var self = this;

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
                self.sitePageStart = new Date();
                self.totalTimeSpent = self.arrayAggregate(self.timeSpentArr);
                console.log('Time spent on site so far : ' + self.totalTimeSpent);

            } else if(document[visibilityState] == 'hidden') {
                console.log('on Invisible');
                var currentTime = new Date();
                if(self.returnInSeconds) {
                    console.log(self.timeSpentArr);
                    (self.timeSpentArr).push(((self.getTimeDiff(self.sitePageStart, currentTime))/1000));
                } else {
                    (self.timeSpentArr).push(self.getTimeDiff(self.sitePageStart, currentTime));
                }
                
            }

        }, false);
    }

};

/**
 * [bindWindowUnload]
 *
 * A cross browser solution for window unload event.
 * 
 */
TimeOnSiteTracker.prototype.bindWindowUnload = function() {
    var self = this,
        windowAttachEventListener = window.attachEvent || window.addEventListener;
        unloadEvent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; // make IE7, IE8 compitable

    windowAttachEventListener(unloadEvent, function(event) { // For >=IE7, Chrome, Firefox
        var message = 'Important: Please click on \'Save\' button to leave this page.';
        if (typeof event == 'undefied') {
            event = window.event;
        }
        if (event) {event.returnValue = message;
            console.log('At window/tab close: ' + self.sitePageStart);

            if(self.timeSpentArr.length) {
                self.totalTimeSpent = self.arrayAggregate(self.timeSpentArr);
                console.log('time so far : ' + self.totalTimeSpent);
            }

            console.log('Time at page exit: ' + new Date());
            /**
             * execute callback if given in config
             */
            if(typeof self.callback === 'function') {
                var data = self.getTimeOnSite();
                data.page.exitTime = (new Date()).toISOString();
                if(self.isTimeOnSiteAllowed) {
                    self.callback(data);
                } else {
                    data = {};
                    self.callback(data);
                }
                
            }
        }
        return message;
    });

};
