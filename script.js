document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("back-to-top");
  
// Show or hide the button based on the user's scroll position
window.addEventListener("scroll", function() {
    if (window.scrollY > 5300) {
      backToTopButton.style.display = "block";
    } else {
      // Hide the button when the user is near the top of the page
      backToTopButton.style.display = "none";
    }
  });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    var videoElement = document.getElementById("my-video");
  
    // Mute the video
    videoElement.muted = true;
  });
  