// Involvement API ID:  ER4ZcRTbIpVq3LDi1zRK
import './css/style.css';

import DisplayController from './js/controllers/displaycontroller.js';

import CommentsController from './js/controllers/commentsController.js';

const shows = new DisplayController([]);

const start = 100;

const end = 110;

shows.fetchRange(start, end);

const commentPopupHandler = () => {
  if (shows.moviesArray.length === end - start) {
    const allCommentButtons = document.querySelectorAll('.comment-button');

    allCommentButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const commentPopup = new CommentsController(shows, button);
        commentPopup.render();

        const postComment = document.querySelector('.commentPopup-button');
        postComment.addEventListener('click', () => {
          commentPopup.sendComment();
        });
      });
    });
  } else {
    setTimeout(commentPopupHandler, 15);
  }
};

commentPopupHandler();
