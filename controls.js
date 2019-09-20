var videoBlock1 = document.getElementById("video-1");
    videoBlock2 = document.getElementById("video-2");
    videoBlock3 = document.getElementById("video-3");
    videoBlock4 = document.getElementById("video-4");
    nothingToPlayBlock = document.getElementById("nothing-to-play");

    videoLink1 = document.getElementById('video-link-1');
    videoLink2 = document.getElementById('video-link-2');
    videoLink3 = document.getElementById('video-link-3');
    videoLink4 = document.getElementById('video-link-4');

    videoLink1.onclick = function(e) {
      if (videoBlock1.style.display !== "none") {
        videoBlock1.style.display = "none";
        nothingToPlayBlock.style.display = "block";
        videoLink1.style.background = "transparent";
      } else {
        videoBlock1.style.display = "block";
        videoLink1.style.background = "rgba(159, 206, 245, 0.5)";
        videoBlock2.style.display = "none";
        videoBlock3.style.display = "none";
        videoBlock4.style.display = "none";
        nothingToPlayBlock.style.display = "none";
        videoLink2.style.background = "transparent";
        videoLink3.style.background = "transparent";
        videoLink4.style.background = "transparent";
      }
    }

    videoLink2.onclick = function(e) {
      if (videoBlock2.style.display !== "none") {
        videoBlock2.style.display = "none";
        nothingToPlayBlock.style.display = "block";
        videoLink2.style.background = "transparent";
      } else {
        videoBlock2.style.display = "block";
        videoLink2.style.background = "rgba(159, 206, 245, 0.5)";
        videoBlock1.style.display = "none";
        videoBlock3.style.display = "none";
        videoBlock4.style.display = "none";
        nothingToPlayBlock.style.display = "none";
        videoLink1.style.background = "transparent";
        videoLink3.style.background = "transparent";
        videoLink4.style.background = "transparent";
      }
    }

    videoLink3.onclick = function(e) {
      if (videoBlock3.style.display !== "none") {
        videoBlock3.style.display = "none";
        nothingToPlayBlock.style.display = "block";
        videoLink3.style.background = "transparent";
      } else {
        videoBlock3.style.display = "block";
        videoLink3.style.background = "rgba(159, 206, 245, 0.5)";
        videoBlock1.style.display = "none";
        videoBlock2.style.display = "none";
        videoBlock4.style.display = "none";
        nothingToPlayBlock.style.display = "none";
        videoLink1.style.background = "transparent";
        videoLink2.style.background = "transparent";
        videoLink4.style.background = "transparent";
      }
    }

    videoLink4.onclick = function(e) {
      if (videoBlock4.style.display !== "none") {
        videoBlock4.style.display = "none";
        nothingToPlayBlock.style.display = "block";
        videoLink4.style.background = "transparent";
      } else {
        videoBlock4.style.display = "block";
        videoLink4.style.background = "rgba(159, 206, 245, 0.5)";
        videoBlock1.style.display = "none";
        videoBlock2.style.display = "none";
        videoBlock3.style.display = "none";
        nothingToPlayBlock.style.display = "none";
        videoLink1.style.background = "transparent";
        videoLink2.style.background = "transparent";
        videoLink3.style.background = "transparent";
      }
    }