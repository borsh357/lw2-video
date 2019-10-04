var btnSend = document.getElementById('comment-send');
    commentsArray = document.getElementsByClassName('comments-block');
    user = document.getElementById('comment-input-username');
    text = document.getElementById('comment-input-text');

btnSend.onclick = function() {
  event.preventDefault();
  for (let index = 0; index < commentsArray.length; index++) {
    if (commentsArray[index].style.display == 'block') {
      commentsArray[index].innerHTML += '<div class="comment-row"><strong class="comment-user">' + user.value + ':</strong><p>' + text.value + '</p></div>';
    }
  }
  user.value = '';
  text.value = '';
}