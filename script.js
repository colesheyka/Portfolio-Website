document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("back-to-top");
  
// Show or hide the button based on the user's scroll position
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 6050) {
      // Show the button when the user has scrolled down 300 pixels
      backToTopButton.style.display = "block";
    } else {
      // Hide the button when the user is near the top of the page
      backToTopButton.style.display = "none";
    }
  });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener("click", function() {
      console.log("Button clicked!");
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    var videoElement = document.getElementById("my-video");
  
    // Mute the video
    videoElement.muted = true;
  });
  