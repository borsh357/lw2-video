var videoBlock1 = document.getElementById("video-1");
    videoBlock2 = document.getElementById("video-2");
    videoBlock3 = document.getElementById("video-3");
    videoBlock4 = document.getElementById("video-4");
    nothingToPlayBlock = document.getElementById("nothing-to-play");

    videoLink1 = document.getElementById('video-link-1');
    videoLink2 = document.getElementById('video-link-2');
    videoLink3 = document.getElementById('video-link-3');
    videoLink4 = document.getElementById('video-link-4');

    commentsBox = document.getElementById('comment-write-box'); 
    comments1 = document.getElementById('video-1-comments-block');
    comments2 = document.getElementById('video-2-comments-block');
    comments3 = document.getElementById('video-3-comments-block');
    comments4 = document.getElementById('video-4-comments-block');

    videoLink1.onclick = function(e) {
      if (videoBlock1.style.display !== "none") {
        videoBlock1.style.display = "none";
        comments1.style.display = "none";
        nothingToPlayBlock.style.display = "block";
        videoLink1.style.background = "transparent";
        commentsBox.style.display = "none";
      } else {
        videoBlock1.style.display = "block";
        comments1.style.display = "block";
        commentsBox.style.display = "block";
        videoLink1.style.background = "rgba(159, 206, 245, 0.5)";
        videoBlock2.style.display = "none";
        videoBlock3.style.display = "none";
        videoBlock4.style.display = "none";
        nothingToPlayBlock.style.display = "none";
        videoLink2.style.background = "transparent";
        videoLink3.style.background = "transparent";
        videoLink4.style.background = "transparent";
        comments2.style.display = "none";
        comments3.style.display = "none";
        comments4.style.display = "none";
      }
    }

    videoLink2.onclick = function(e) {
      if (videoBlock2.style.display !== "none") {
        videoBlock2.style.display = "none";
        comments2.style.display = "none";
        nothingToPlayBlock.style.display = "block";
        videoLink2.style.background = "transparent";
        commentsBox.style.display = "none";
      } else {
        videoBlock2.style.display = "block";
        comments2.style.display = "block";
        commentsBox.style.display = "block";
        videoLink2.style.background = "rgba(159, 206, 245, 0.5)";
        videoBlock1.style.display = "none";
        videoBlock3.style.display = "none";
        videoBlock4.style.display = "none";
        nothingToPlayBlock.style.display = "none";
        videoLink1.style.background = "transparent";
        videoLink3.style.background = "transparent";
        videoLink4.style.background = "transparent";
        comments1.style.display = "none";
        comments3.style.display = "none";
        comments4.style.display = "none";
      }
    }

    videoLink3.onclick = function(e) {
      if (videoBlock3.style.display !== "none") {
        videoBlock3.style.display = "none";
        nothingToPlayBlock.style.display = "block";
        videoLink3.style.background = "transparent";
        commentsBox.style.display = "none";
        comments3.style.display = "none";
      } else {
        videoBlock3.style.display = "block";
        commentsBox.style.display = "block";
        comments3.style.display = "block";
        videoLink3.style.background = "rgba(159, 206, 245, 0.5)";
        videoBlock1.style.display = "none";
        videoBlock2.style.display = "none";
        videoBlock4.style.display = "none";
        nothingToPlayBlock.style.display = "none";
        videoLink1.style.background = "transparent";
        videoLink2.style.background = "transparent";
        videoLink4.style.background = "transparent";
        comments2.style.display = "none";
        comments1.style.display = "none";
        comments4.style.display = "none";
      }
    }

    videoLink4.onclick = function(e) {
      if (videoBlock4.style.display !== "none") {
        videoBlock4.style.display = "none";
        nothingToPlayBlock.style.display = "block";
        videoLink4.style.background = "transparent";
        commentsBox.style.display = "none";
        comments4.style.display = "none";
        commentsBox.style.display = "none";
      } else {
        videoBlock4.style.display = "block";
        commentsBox.style.display = "block";
        commentsBox.style.display = "block";
        comments4.style.display = "block";
        videoLink4.style.background = "rgba(159, 206, 245, 0.5)";
        videoBlock1.style.display = "none";
        videoBlock2.style.display = "none";
        videoBlock3.style.display = "none";
        nothingToPlayBlock.style.display = "none";
        videoLink1.style.background = "transparent";
        videoLink2.style.background = "transparent";
        videoLink3.style.background = "transparent";
        comments2.style.display = "none";
        comments3.style.display = "none";
        comments1.style.display = "none";
      }
    }