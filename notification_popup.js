var text = document.getElementById('react-root');
var string = "<div id='myModal' class='modal'>" +
                "<div class='modal-content'>" +
                  "<span class='close'>&times;</span>" +
                    "<p>Some text in the Modal..</p>" +
                "</div>" +
            "</div>"

text.insertAdjacentHTML('beforeend', string);

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
    var elements = document.getElementsByClassName('_9mno0 _ov9ai');
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

    if(elements[1].childNodes[0].innerText == target.innerText) {
      target.onclick = function() {
          modal.style.display="block";
      }
      span.onclick = function() {
          modal.style.display = "none";
      }
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
    }
}, false);
