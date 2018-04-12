var text = document.getElementById('react-root');
var popupPart1 = `
<div id='myModal' class='modal'>
    <div class='modal-content'>
          <span class="close">&times;</span>
          <h2 id="popTitle">Before you Sign Up</h2>
          <div id="message">
            <p>`
var popupPart2 = `</p>
          </div>
          <div id="footer">
              <span>Nevermind</span>
              <span id="middle" class="align-right">Sign up</span>
              <span class="align-right">Sign up and remind me next time</span>
          </div>
    </div>
</div>`
text.insertAdjacentHTML('beforeend', popupPart1 + "Filler" + popupPart2);


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

function updateModal(innerText){
	var elem = document.getElementById('myModal');
    elem.parentNode.removeChild(elem);
    var text = document.getElementById('react-root');
	text.insertAdjacentHTML('beforeend', popupPart1 + innerText + popupPart2);
}

window.onload = function(){
	signUpElement.onclick = function(event) {
	    console.log("Clicked!")
		chrome.storage.sync.get('state', function(data) {
			if (data.state === 'on') {
				modal.style.display= "block";
				event.stopPropagation();
			}
		});
	}
	var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
        chrome.storage.sync.get('state', function(data) {
			if (data.state === 'on') {
				modal.style.display = "none";
			}
	    });
    }

    window.onclick = function(event) {
		if (event.target == modal) {
			chrome.storage.sync.get('state', function(data) {
				if (data.state === 'on') {
					modal.style.display = "none";
				}
			});
		}
	}
}
document.addEventListener('click', function(e) {
	chrome.storage.sync.get('state', function(data) {
            if (data.state === 'on') {
	        event = e || window.event;
		var target = e.target || e.srcElement;
		var tag = target.textContent;
		console.log("Got click on tag " + tag);
		var domain = window.location.host;
		console.log("Got host " + domain)
		getEulaSectionForTag(domain, tag, function(eulaText){
			if(eulaText != null){
				//there is a eula text section! Good.
				console.log("Got EULA for tag " + tag + " on domain " + domain);
				event.stopPropagation();
				updateModal(eulaText);
				var modal = document.getElementById('myModal');
				modal.style.display="block"
			} else {
				console.log("Unable to find EULA for tag " + tag + " on domain " + domain);
			}
		});
	    }
	}

}, false);
