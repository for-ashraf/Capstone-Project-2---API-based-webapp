import { JSDOM } from 'jsdom';
import CommentsPage from './__mocks__/mockCommentsController.js';

describe('CommentsPage calculateCount method', () => {
  // Arrange
  const modalElement = `
   <!-- Modal -->
   <div class="modal fade" id="commentsPage" tabindex="-1"  aria-hidden="true">
     <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
              
      </div>
     </div>
    </div>
   </div>`;

  const shows = {
    moviesArray: [
      {
        id: 1,
        image: {
          medium: 'image',
        },
        name: 'testing-movie-1',
        status: 'Running',
        rating: {
          average: 7.1,
        },
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet faucibus. Suspendisse malesuada consectetur lacinia. Maecenas eleifend magna libero, non malesuada nisl facilisis at.',
        genres: [
          'Drama', 'Adventure',
        ],
      },

      {
        id: 2,
        image: {
          medium: 'image',
        },
        name: 'testing-movie-1',
        status: 'Running',
        rating: {
          average: 5.0,
        },
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet faucibus. Suspendisse malesuada consectetur lacinia. Maecenas eleifend magna libero, non malesuada nisl facilisis at.',
        genres: [
          'Drama', 'Romance', 'Action',
        ],
      },
      {
        id: 3,
        image: {
          medium: 'image',
        },
        name: 'testing-movie-3',
        status: 'Ended',
        rating: {
          average: 8.5,
        },
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt aliquet faucibus. Suspendisse malesuada consectetur lacinia. Maecenas eleifend magna libero, non malesuada nisl facilisis at.',
        genres: [
          'Sci-fi', 'Action',
        ],
      },
    ],
  };
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;

  document.body.innerHTML = modalElement;

  const button = document.createElement('button');
  button.id = '1';

  const commentsPage = new CommentsPage(shows, button);

  const comment1 = {
    item_id: '1',
    username: 'Abraha',
    comment: 'Not a bad movie!',
  };

  const comment2 = {
    item_id: '2',
    username: 'Muhammad Ashraf',
    comment: 'This is a flop show',
  };

  const comment3 = {
    item_id: '3',
    username: 'Luca',
    comment: 'My Best show is not that',
  };

  test('calculateCount function returns 0 since no comment added', () => {
    // Act
    const result = commentsPage.calculateCount();

    // Assert
    expect(result).toEqual(0);
  });

  test('calculateCount returns 3 since 3 comments has been added', () => {
    // Act
    commentsPage.commentsArray.push(comment1);
    commentsPage.commentsArray.push(comment2);
    commentsPage.commentsArray.push(comment3);

    const result2 = commentsPage.calculateCount();

    // Assert
    expect(result2).toEqual(3);
  });

  test('confirm that the comments are in the DOM', () => {
    // Act
    commentsPage.render();
    const allComments = commentsPage.searchDOM();
    // Assert
    expect(allComments.length).toEqual(3);
  });

  test('confirm that the comments are in the DOM', () => {
    // Act
    commentsPage.render();
    const [firstComment] = commentsPage.searchDOM();
    // Assert
    expect(firstComment.innerHTML).toEqual('<b>Abraha: </b>');
  });
});
