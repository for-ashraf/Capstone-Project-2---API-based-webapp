import './css/style.css';

import ShowController from './js/controllers/displaycontroller.js';

import CommentsController from './js/controllers/commentsController.js';

const shows = new ShowController([]);

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
