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
        medium: 'image'
      },
      name: 'testing-movie-1',
      status: 'Running',
      rating: {
        average: 7.1
      },
      summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      genres: [
        'Drama', 'Adventure'
      ]
    },
    
    {
      id: 2,
      image: {
        medium: 'image'
      },
      name: 'testing-movie-1',
      status: 'Running',
      rating: {
        average: 5.0
      },
      summary: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      genres: [
        'Drama', 'Romance', 'Action'
      ]
    }, 
    {
      id: 3,
      image: {
        medium: 'image'
      },
      name: 'testing-movie-3',
      status: 'Ended',
      rating: {
        average: 8.5
      },
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      genres: [
        'Sci-fi', 'Action'
      ]
    }
   ]
  }
  const dom = new JSDOM();
  global.document = dom.window.document;
  global.window = dom.window;
  
  document.body.innerHTML = modalElement;
  
  const button = document.createElement('button');
  button.id = '1';
  
  const commentsPage = new CommentsPage(shows, button);

  const comment1 = {
    item_id: '1',
    username: 'Jose Abel',
    comment: 'Amazing show!'
  }

  const comment2 = {
    item_id: '2',
    username: 'Bruce Wayne',
    comment: 'I hated this show'
  }

  const comment3 = {
    item_id: '3',
    username: 'Peter Parker',
    comment: "The best show is Spiderman"
  }

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
    expect(firstComment.innerHTML).toEqual('<b>Jose Abel: </b>');

  });
 });
