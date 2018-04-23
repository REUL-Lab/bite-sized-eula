var text = document.body;
var neverreminddict = {}; // create a dictionary to remember about the settings

var popupPart1 = `
<div id='myModal' class='modal'>
    <div class='modal-content'>
          <span class="close" id="close1">&times;</span>
          <h2 id="popTitle">`

var popupPart2 = `</h2>
          <div id="message">
          <p>`


var popupPart3 = `</p>
          </div>
          <div id="footer">
              <span id="nevermind1">Nevermind</span>
              <span id="middle1" style="margin-left:24px" class="align-right">`

var popupPart4 =  `</span>
              <span class="align-right" id="remindAgain1">`

var popupPart5 = ` and remind me next time</span>
          </div>
    </div>
</div>`
text.insertAdjacentHTML('beforeend', popupPart1 + "subtitle" + popupPart2 + "Filler" + popupPart3 + "action" + popupPart4 + "action" + popupPart5);



function getElementByContents(type, contents){
	var tags = document.getElementsByTagName(type);
	var searchText = contents;
	var found;

	for (var i = 0; i < aTags.length; i++) {
		if (tags[i].textContent == searchText) {
			found = tags[i];
			break;
		}
	}

}

function updateModal(innerText, subtitle, action) {
    var elem = document.getElementById('myModal');
    elem.parentNode.removeChild(elem);
    // var text = document.getElementById('react-root');
    // if (text === null) {
    //     text = document.getElementById('facebook');
    // }
    var text = document.body;
    text.insertAdjacentHTML('beforeend', popupPart1 + subtitle + popupPart2 + innerText + popupPart3 + action + popupPart4 + action + popupPart5);
}

// document.addEventListener('DOMContentLoaded', function() {
//     var buttons = document.getElementsByTagName('button');
//     for (var i = 0; i < buttons.length; i++) {
//         var button = buttons[i];
//         //var type = button.getAttribute('type') || 'submit'; // Submit is the default
//         button.disabled = true;
//         console.log(button);
//     }
// });


// window.addEventListener('load',
//   function() {

//     var buttons = document.getElementsByTagName('button');

//     console.log(buttons);
//     for (var i = 0; i < buttons[0].length; i++) {

//         var button = buttons[i];
//         //var type = button.getAttribute('type') || 'submit'; // Submit is the default
//         if (button.textContent==='Sign up' || button.getAttribute("data-testid")==="react-composer-post-button") {
//             button.disabled = true;
//         }
//         console.log(button);
//     }
//   }, false);

//var disabled = true;
// function disableButtons () {
//     var buttons = document.getElementsByTagName('button');
//     for (var i = 0; i < buttons.length; i++) {
//         var button = buttons[i];
//         //var type = button.getAttribute('type') || 'submit'; // Submit is the default
//         chrome.storage.sync.get('state', function(data) {
//             if (disabled && data.state === 'on') {
//                 button.disabled = true;
//                 console.log(button);
//             }

//         });

//     }
// }

// var myVar = setInterval(disableButtons, 10000);


document.addEventListener('click', function(e) {
	    event = e || window.event;
		var target = e.target || e.srcElement;
		var tag = target.textContent;
        console.log("target"+target);
        //var tag = null;
        console.log(target);
        if (tag===null || tag ==="") {
            tag = target.getAttribute("data-testid");
            console.log(tag);
            console.log(target);
        }
        if (tag===null || tag === "") {
            tag = target.getAttribute("aria-label");
        }
        if (tag===null || tag === "") {
            tag = target.getAttribute("class");
        }
		console.log("Got click on tag " + tag);
		var domain = window.location.host;
		console.log("Got host " + domain)


		//Check state of plugin to decide whether to display the pop-up or not.
		chrome.storage.sync.get('state', function(data) {
        	if (data.state === 'on') {
        		getEulaSectionForTag(domain, tag, function(eulaText, subtitle, action, type,neverremind){
                    console.log(neverreminddict);
                    if (!(String([domain,tag]) in neverreminddict)) {
                        neverreminddict[String([domain,tag])] = false;
                        console.log(String([domain,tag]));
                    }
                	if(eulaText != null && subtitle != null && action != null && type != null && type === 'click' && neverreminddict[String([domain,tag])] === false){
                		//there is a eula text section! Good.
                		console.log("Got EULA for tag " + tag + " on domain " + domain+" on click.");
                        //disabled = false;

                      //  clearInterval(myVar);
                       // myVar = 0;
                        //target.stopImmediatePropagation();
                        //event.stopImmediatePropagation();


                		//event.stopPropagation();
                        //event.preventDefault();
                        // console.log(target);
                        // target.onclick = function() {
                        //     alert('blah');
                        // }
                        //target.off("click");
                       // target.addEventListener("")
                        //console.log(target);
                        //target.disabled = true;
                        //target.disabled = false;

                		updateModal(eulaText,subtitle,action);
                        var modal = document.getElementById('myModal');
                        modal.style.display="block";


                        var span = document.getElementById("close1");
                        var remindagain = document.getElementById("remindAgain1");
                        var middle = document.getElementById("middle1");
                        var dontremind = document.getElementById("nevermind1");

                        span.onclick = function() {
                        //Check state of plugin to decide whether to display the pop-up or not.
                            chrome.storage.sync.get('state', function(data) {
                                if (data.state === 'on') {
                                    modal.style.display = "none";
                                    //disabled = false;
                                }
                            });
                        }


                        remindagain.onclick = function() {
                        //Check state of plugin to decide whether to display the pop-up or not.
                            chrome.storage.sync.get('state', function(data) {
                                if (data.state === 'on') {
                                    modal.style.display = "none";
                                    //disabled = false;
                                }
                            });
                        }


                        dontremind.onclick = function() {
                        //Check state of plugin to decide whether to display the pop-up or not.
                            chrome.storage.sync.get('state', function(data) {
                                if (data.state === 'on') {
                                    //need to change the database value
                                    console.log("dont remind option clicked");
                                    //setEulaSectionForTag(domain,tag);
                                    neverreminddict[String([domain,tag])] = true;
                                    modal.style.display = "none";
                                    //disabled = false;
                                }
                            });
                        }

                        middle.onclick = function() {
                        //Check state of plugin to decide whether to display the pop-up or not.
                            chrome.storage.sync.get('state', function(data) {
                                if (data.state === 'on') {
                                    modal.style.display = "none";
                                    //disabled = false;
                                }
                            });
                        }

                        window.onclick = function(event) {
                            if (event.target == modal) {
                                //Check state of plugin to decide whether to display the pop-up or not.
                                chrome.storage.sync.get('state', function(data) {
                                    if (data.state === 'on') {
                                        modal.style.display = "none";
                                    }
                                });
                            }
                        }


                	} else {
                		console.log("Unable to find EULA for tag " + tag + " on domain " + domain);
                	}
                });
        	}
        });
}, false);

document.addEventListener('keypress', function(e) {
        var key = e.which || e.keyCode;
        event = e || window.event;
        var target = e.target || e.srcElement;
        var tag = target.getAttribute("aria-label");
        //var tag = target.textContent;
        if (tag===null || tag === "") {
            //tag = target.getAttribute("aria-label");
            tag = target.textContent;
        }
        if (tag===null || tag === "") {
            tag = target.getAttribute("class");
        }
        console.log("Got click on tag " + tag);
        var domain = window.location.host;
        console.log("Got host " + domain)
        //Check state of plugin to decide whether to display the pop-up or not.
        chrome.storage.sync.get('state', function(data) {
            if (data.state === 'on' && key === 13) {
                getEulaSectionForTag(domain, tag, function(eulaText, subtitle, action, type,neverremind){
                    console.log(neverreminddict);
                    if (!(String([domain,tag]) in neverreminddict)) {
                        neverreminddict[String([domain,tag])] = false;
                        console.log(String([domain,tag]));
                    }

                    if(eulaText != null && subtitle != null && action != null && type != null && type === 'enter' && neverreminddict[String([domain,tag])] === false){
                        //there is a eula text section! Good.
                        console.log("Got EULA for tag " + tag + " on domain " + domain +" on keypress");
                        //event.stopPropagation();
                        //event.preventDefault();
                        updateModal(eulaText,subtitle,action);
                        var modal = document.getElementById('myModal');
                        modal.style.display="block";

                        var span = document.getElementById("close1");
                        var remindagain = document.getElementById("remindAgain1");
                        var middle = document.getElementById("middle1");
                        var dontremind = document.getElementById("nevermind1");

                        span.onclick = function() {
                        //Check state of plugin to decide whether to display the pop-up or not.
                            chrome.storage.sync.get('state', function(data) {
                                if (data.state === 'on') {
                                    modal.style.display = "none";
                                }
                            });
                        }


                        remindagain.onclick = function() {
                        //Check state of plugin to decide whether to display the pop-up or not.
                            chrome.storage.sync.get('state', function(data) {
                                if (data.state === 'on') {
                                    modal.style.display = "none";
                                }
                            });
                        }


                        dontremind.onclick = function() {
                        //Check state of plugin to decide whether to display the pop-up or not.
                            chrome.storage.sync.get('state', function(data) {
                                if (data.state === 'on') {
                                    neverreminddict[String([domain,tag])] = true;
                                    modal.style.display = "none";
                                }
                            });
                        }

                        middle.onclick = function() {
                        //Check state of plugin to decide whether to display the pop-up or not.
                            chrome.storage.sync.get('state', function(data) {
                                if (data.state === 'on') {
                                    modal.style.display = "none";
                                }
                            });
                        }

                        window.onclick = function(event) {
                            if (event.target == modal) {
                                //Check state of plugin to decide whether to display the pop-up or not.
                                chrome.storage.sync.get('state', function(data) {
                                    if (data.state === 'on') {
                                        modal.style.display = "none";
                                    }
                                });
                            }
                        }
                    } else {
                        console.log("Unable to find EULA for tag " + tag + " on domain " + domain);
                    }
                });
            }
        });
}, false);
