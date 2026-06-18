

// Function to hide all sections
function hideAllSections() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  }
  
  // Function to show the timeline section
  function showTimeline() {
    hideAllSections();
    var el = document.getElementById('timeline-section');
    if (el) el.style.display = 'block';
  }
  
  // Function to show the apology section
  function showApology() {
    hideAllSections();
    var el = document.getElementById('apology-section');
    if (el) el.style.display = 'block';
  }

  
  // Function to show the letter section
  // function showLetter() {
  //   hideAllSections();
  //   document.getElementById('letter-section').style.display = 'block';
  //   createFallingHearts(); // Create falling hearts when the "Letter from the Heart" section is displayed
  // }
  
  
  
  // Function to create falling hearts
  // function createFallingHearts() {
  //     // Get the container within the 'Letter from the Heart' section
  //     var heartContainer = document.getElementById('letter-section');
  
  //     for (var i = 0; i < 20; i++) {
  //         var heart = document.createElement('div');
  //         heart.className = 'falling-heart';
  //         heart.style.left = Math.random() * window.innerWidth + 'px';
  //         heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  //         heartContainer.appendChild(heart);
  
  //         // Remove the heart from the DOM after the animation completes
  //         heart.addEventListener('animationend', function () {
  //             this.remove();
  //         });
  //     }
  // }
  
  // Function to create falling hearts
  function createFallingHearts() {
    var heartContainer = document.getElementById('letter-section');
    heartContainer.style.position = 'relative';
  
    for (var i = 0; i < 20; i++) {
      var heart = document.createElement('div');
      heart.className = 'falling-heart';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = 0; // Add this line
      heart.style.animationDuration = Math.random() * 2 + 3 + 's';
      heart.style.position = 'absolute';
      heartContainer.appendChild(heart);
  
      heart.addEventListener('animationend', function() {
        this.remove();
      });
    }
  }
  
  
  
  
  
  
  
  // Function to show the letter section
  function showLetter() {
    hideAllSections();
    document.getElementById('letter-section').style.display = 'block';
  
    // Create falling hearts after a slight delay
    setTimeout(createFallingHearts, 100);
  }
  
  
  // Call showTimeline when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    hideAllSections(); // Hide all sections on page load
  });
  
  // Event listeners for navigation links
  var timelineLink = document.getElementById('timeline-link');
  if (timelineLink) timelineLink.addEventListener('click', showTimeline);
  var apologyLink = document.getElementById('apology-link');
  if (apologyLink) apologyLink.addEventListener('click', showApology);
  var letterLink = document.getElementById('letter-link');
  if (letterLink) letterLink.addEventListener('click', showLetter);

  
  
  // Heart section
  document.getElementById('acceptButton').addEventListener('click', function() {
    fixHeart();
  });
  
  // Function to fix the heart and show small hearts
  function fixHeart() {
  document.getElementById('broken-heart').style.display = 'none';
  document.getElementById('fixed-heart').style.display = 'block';

  const interval = setInterval(createSmallHearts, 500);

  document.getElementById('acceptButton').disabled = true;

  setTimeout(() => {
    clearInterval(interval);
  }, 10000); // hearts for 10 seconds
}
  
  function createSmallHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");

    heart.className = "small-heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}
  
  
  
  // for muisic
  
  
  function playAudio() {
    const audioControls = document.getElementById('audio-controls');
    audioControls.classList.add('active');
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
  }
  function toggleAudio() {
    const backgroundMusic = document.getElementById('backgroundMusic');
  
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }
  
  
  // for video
  
  // script.js
  
  var videoContainer = document.getElementById("video-container");
  var video = document.getElementById("myVideo");
  var playPauseBtn = document.getElementById("playPauseBtn");
  
  function togglePlayPause() {
    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = "Pause";
    } else {
      video.pause();
      playPauseBtn.innerHTML = "Play";
    }
  }
  
  function showVideo() {
    hideAllSections();
    videoContainer.style.display = "block";
  }
  
  function hideAllSections() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  }
  
  
  
