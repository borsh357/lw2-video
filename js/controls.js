
var commentsSection = document.getElementById('comments-section');
    nothingToPlayBlock = document.getElementById('nothing-to-play');
    videosArray = document.getElementsByClassName('video');
    linksArray = document.getElementsByClassName('video-link');
    commentsArray = document.getElementsByClassName('comments-block');

for (let index = 0; index < linksArray.length; index++) {
  linksArray[index].onclick = function() {
    if (videosArray[index].style.display !== 'none') {
      videosArray[index].style.display = 'none';
      commentsSection.style.display = 'none';
      commentsArray[index].style.display = 'none';
      nothingToPlayBlock.style.display = 'block';
      linksArray[index].style.color = '#4a4a4a';
    } else {
      videosArray[index].style.display = 'block';
      commentsSection.style.display = 'block';
      for (let index = 0; index < videosArray.length; index++) {
        videosArray[index].style.display = 'none';
        commentsArray[index].style.display = 'none';
        linksArray[index].style.color = '#4a4a4a';
      }
      nothingToPlayBlock.style.display = 'none';
      videosArray[index].style.display = 'block';
      commentsArray[index].style.display = 'block';
      linksArray[index].style.color = '#73faf3';
    }
  }
}

    