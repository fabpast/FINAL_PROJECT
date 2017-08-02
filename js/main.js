var slide = 0;

$(document).ready(function() {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
})

$(document).ready(function() {
  $("button.left").click(function() {
    $("#image-container img").eq(slide).addClass("img-moved-left");
    slide = slide + 1;
    if (slide === 7) {
      slide = 0
      $("#image-container img").removeClass("img-moved-left");
    }
  });
});

$(document).ready(function() {
  $("button.right").click(function() {
      // $("#image-container img").eq(slide).addClass("img-moved-left");
      slide = slide - 1;
      $("#image-container img").eq(slide).removeClass("img-moved-left");
      if (slide <= 0) {
        slide = 6
        $("#image-container img").addClass("img-moved-left");
        $("#image-container img").eq(slide).removeClass("img-moved-left");
      }
  });
});
