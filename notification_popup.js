var text = document.getElementById('react-root');
var string = `
<div id='myModal' class='modal'>
    <div class='modal-content'>
          <span class="close">&times;</span>
          <h2 id="popTitle">Before you Sign Up</h2>
          <div id="message">
            <p>Instagram has the power to access everything you give them</p>
          </div>
          <div id="footer">
              <span>Nevermind</span>
              <span id="middle" class="align-right">Sign up</span>
              <span class="align-right">Sign up and remind me next time</span>
          </div>
    </div>
</div>`
text.insertAdjacentHTML('beforeend', string);

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
    var elements = document.getElementsByClassName('_9mno0 _ov9ai');
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var signUpElement = elements[1].childNodes[0];

    signUpElement.onclick = function() {
        modal.style.display="block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}, false);
