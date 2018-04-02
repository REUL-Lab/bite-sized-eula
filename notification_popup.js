var text = document.getElementById('react-root');
var string1 = `
<div id='myModal1' class='modal'>
    <div class='modal-content'>
          <span id="close1" class="close">&times;</span>
          <h2 id="popTitle">Before you Sign Up</h2>
          <div id="message">
            <p>Instagram has the power to access everything you give them</p>
          </div>
          <div id="footer">
              <button type="button" id="nevermind1" <span style= "color:#52a4b1;font-size:12;">Nevermind</span> </button>
              <button type="button" id="middle1" class="align-right" <span style= "color:#52a4b1;font-size:12;float:right;">Sign up</span> </button>
              <button type="button" id="remindAgain1" class="align-right" <span style= "color:#52a4b1;font-size:12;">Sign up and remind me next time</span> </button>
          </div>
    </div>
</div>`

var string2 = `
<div id='myModal2' class='modal'>
    <div class='modal-content'>
          <span id="close2" class="close">&times;</span>
          <h2 id="popTitle">Before you Post Comment</h2>
          <div id="message">
            <p>This comment will now be publicly visible.</p>
          </div>
          <div id="footer">
              <button type="button" id="nevermind2" <span style= "color:#52a4b1;font-size:12;">Nevermind</span> </button>
              <button type="button" id="middle2" class="align-right" <span style= "color:#52a4b1;font-size:12;float:right;">Post Comment</span> </button>
              <button type="button" id="remindAgain2" class="align-right" <span style= "color:#52a4b1;font-size:12;">Post comment and remind me next time</span> </button>
          </div>
    </div>
</div>`

text.insertAdjacentHTML('beforeend', string1);
text.insertAdjacentHTML('beforeend', string2);

document.addEventListener('mousedown', function(e) {
    chrome.storage.sync.get('state', function(data) {
           if (data.state === 'on') {
                  e = e || window.event;
                  var target = e.target || e.srcElement,
                      text = target.textContent || text.innerText;
                  var elements = document.getElementsByClassName('_9mno0 _ov9ai');
                  var modal = document.getElementById('myModal1');
                  var span = document.getElementById("close1");
                  var nevermind = document.getElementById('nevermind1');
                  //var nevermind = document.getElementsByClassName('nevermind')[0];
                  var signUp = document.getElementById("middle1");
                  var remindagain = document.getElementById("remindAgain1");
                  //var signUp = document.getElementsByClassName('signUp')[0];
                  //var dontremindagain = document.getElementsByClassName('dontremindagain')[0];
                  var signUpElement = elements[1].childNodes[0];
                  //var elements1 = document.getElementsByClassName('');
                  //var logInWithFB = elements1[0].childNodes[0];


                  signUpElement.onclick = function() {
                      chrome.storage.sync.get('state', function(data) {
                              if (data.state === 'on') {
                                   modal.style.display="block";
                               }
                          });
                  }

                  span.onclick = function() {
                      chrome.storage.sync.get('state', function(data) {
                            if (data.state === 'on') {
                                modal.style.display = "none";
                             }
                       });
                  }

                  nevermind.onclick = function() {
                      chrome.storage.sync.get('state', function(data) {
                              if (data.state === 'on') {
                                  modal.style.display = "none";
                               }
                         });

                  }

                  signUp.onclick = function() {
                      chrome.storage.sync.get('state', function(data) {
                              if (data.state === 'on') {
                                  modal.style.display = "none";
                                  chrome.storage.sync.set({state:'off'});
                               }
                         });

                  }

                  remindagain.onclick = function() {
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

                  // logInWithFB.onclick = function() {
                  //     chrome.storage.sync.get('state', function(data) {
                  //              if (data.state === 'on') {
                  //                  modal.style.display="block";
                  //              }
                  //         });
                  // }
           }
     });

}, false);

document.addEventListener('keyup', function(e) {

  chrome.storage.sync.get('state', function(data) {

    if (data.state== 'on') {
      var elements = document.getElementsByClassName('_km7ip _ti7l3');
      var modal = document.getElementById('myModal2');
      //var span = document.getElementsByClassName("close")[0];
      var span = document.getElementById('close2');

      //var nevermind = document.getElementsByClassName('nevermind')[0];
      var nevermind = document.getElementById('nevermind2');
      var signUp = document.getElementById("middle2");
      var remindagain = document.getElementById("remindAgain2");
      var postElement = elements[1].childNodes[0];


      // function onPointerDown(event){

      //   chrome.storage.sync.get('state', function(data) {
      //           if (data.state === 'on') {
      //               modal.style.display = "block";
      //            }
      //      });

      // }
      // //function onPointerHover(event){ /** Do stuff here **/ }
      // //function onPointerMove(event){ /** Do stuff here **/ }
      // function onPointerUp(event){
      //   chrome.storage.sync.get('state', function(data) {
      //           if (data.state === 'on') {
      //               modal.style.display = "block";
      //            }
      //      });
      // }

      //signUpElement.addEventListener("mousedown", onPointerDown);
      //signUpElement.addEventListener("pointerdown", onPointerDown);
      //signUpElement.addEventListener("touchstart", onPointerDown);




      //signUpElement.addEventListener("mouseup", onPointerUp);
      //signUpElement.addEventListener("pointerup", onPointerUp);
      //signUpElement.addEventListener("touchend", onPointerUp);

      //works only in the second enter - ??
      postElement.onkeyup = function() {
          chrome.storage.sync.get('state', function(data) {
                if (data.state === 'on' && e.keyCode === 32) {
                    modal.style.display = "block";
                 }
           });
      }

      span.onclick = function() {
          chrome.storage.sync.get('state', function(data) {
                if (data.state === 'on') {
                    modal.style.display = "none";
                 }
           });
      }

      nevermind.onclick = function() {
          chrome.storage.sync.get('state', function(data) {
                  if (data.state === 'on') {
                      modal.style.display = "none";
                   }
             });

      }

      signUp.onclick = function() {
          chrome.storage.sync.get('state', function(data) {
                  if (data.state === 'on') {
                      modal.style.display = "none";
                      chrome.storage.sync.set({state:'off'});
                   }
             });

      }

      remindagain.onclick = function() {
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


  });

}, false);


