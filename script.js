

// Get the button element
var backToTopButton = document.getElementById("back-to-top");
document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("back-to-top");
  
    // Show or hide the button based on the user's scroll position
    window.addEventListener("scroll", function() {
      console.log("JavaScript code executed!");
  
      if (window.pageYOffset > 5950) {
        // Show the button when the user has scrolled down 300 pixels
        backToTopButton.style.display = "block";
      } else {
        // Hide the button when the user is near the top of the page
        backToTopButton.style.display = "none";
      }
    });
  
    backToTopButton.addEventListener("click", function() {
      console.log("Button clicked!");
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var videoElement = document.getElementById("my-video");
  
    // Mute the video
    videoElement.muted = true;
  });