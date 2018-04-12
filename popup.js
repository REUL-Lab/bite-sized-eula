// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//This file contains all the backend functionality for the plugin menu.

/**
 * Checks state of plugin and displays the correct button (pause or play) and the correct text (enable or diabled)
*/
chrome.storage.sync.get('state', function(data) {
         if (data.state === 'on') {
            document.getElementById('msg').innerHTML = '<font size="4" color="grey">Bite-Sized EULA is enabled</font>'
            document.getElementById('pausePlayIcon').className = 'glyphicon glyphicon-pause'

         } else {
            document.getElementById('msg').innerHTML = '<font size="4" color="grey">Bite-Sized EULA is disabled</font>'
            document.getElementById('pausePlayIcon').className = 'glyphicon glyphicon-play'
         }
});


/**
 * Checks to see if the pause or play button is clicked on.
 * If clicked then it calls the function buttonPlayPress() shown below
*/
$(document).ready(function() {
  document.getElementById("pausePlay").addEventListener('click', buttonPlayPress);
});

/**
 * Updates the state of the plugin and changes the menu as required.
 * If the state is currently on then it changes it to off. The play button and enable text are displayed.
 * If the state is currently off then it changes it to on. The pause button and disable text are displayed.
*/
function buttonPlayPress() {
   chrome.storage.sync.get('state', function(data) {
         if (data.state === 'on') {
           chrome.storage.sync.set({state: 'off'});
           document.getElementById('msg').innerHTML = '<font size="4" color="grey">Bite-Sized EULA is disabled</font>'
           document.getElementById('pausePlayIcon').className = 'glyphicon glyphicon-play'
         } else {
           chrome.storage.sync.set({state: 'on'});
           document.getElementById('msg').innerHTML = '<font size="4" color="grey">Bite-Sized EULA is enabled</font>'
           document.getElementById('pausePlayIcon').className = 'glyphicon glyphicon-pause'
         }
    });
}

/**
 * Advanced Settings page is loaded when the advanced settings icon is clicked in the plugin menu.
*/
window.addEventListener('DOMContentLoaded', function() {
    // your button here
    var link = document.getElementById('advancedsettings');
    // onClick's logic below:
    link.addEventListener('click', function() {
        window.open(chrome.extension.getURL("advancedSettings.html"), '_blank');
    });
});
