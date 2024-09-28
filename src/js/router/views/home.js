import { authGuard } from '../../utilities/authGuard';
import { readPostsByUser } from '../../api/post/read';
import { AUTHOR_NAME } from '../../api/constants';
import { deletePost } from '../../api/post/delete';
import { onLogout } from '../../ui/auth/logout';

authGuard();

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  onLogout();
});

/**
 * Generates an HTML element for a post.
 *
 * @param {Object} post - The post data.
 * @param {string} post.id - The ID of the post.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body of the post.
 * @param {string[]} [post.tags] - The tags associated with the post.
 * @param {Object} [post.media] - The media associated with the post.
 * @param {string} post.created - The creation timestamp of the post.
 * @param {string} [post.updated] - The last update timestamp of the post.
 * @returns {HTMLElement} The generated post element.
 */
function generatePostHtml({ id, title, body, tags, media, created, updated }) {
  const postContainer = document.createElement('article');
  postContainer.classList.add('post');

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const postLink = document.createElement('a');
  postLink.href = `./listing/single/?id=${id}`;

  postLink.appendChild(titleElement);

  postContainer.appendChild(postLink);

  const bodyElement = document.createElement('p');
  bodyElement.textContent = body;
  postContainer.appendChild(bodyElement);

  if (tags && tags.length > 0) {
    const tagsElement = document.createElement('ul');
    tags.forEach((tag) => {
      if (!tag) return;
      const tagItem = document.createElement('li');
      tagItem.textContent = tag;
      tagsElement.appendChild(tagItem);
    });
    postContainer.appendChild(tagsElement);
  }

  if (media) {
    const mediaElement = document.createElement('img');
    mediaElement.src = media.url;
    postContainer.appendChild(mediaElement);
  }

  const createdElement = document.createElement('time');
  createdElement.dateTime = created;
  createdElement.textContent = `Created: ${new Date(created).toLocaleString()}`;
  postContainer.appendChild(createdElement);

  if (updated) {
    const updatedElement = document.createElement('time');
    updatedElement.dateTime = updated;
    updatedElement.textContent = `Updated: ${new Date(updated).toLocaleString()}`;
    postContainer.appendChild(updatedElement);
  }

  const buttonsContainer = document.createElement('div');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    window.location.href = `./post/edit/?id=${id}`;
  });

  buttonsContainer.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', async () => {
    await deletePost(id);
    handleHomePage();
  });

  buttonsContainer.appendChild(deleteButton);

  postContainer.appendChild(buttonsContainer);

  return postContainer;
}

/**
 * Generates and displays post elements on the page.
 *
 * @param {Object[]} posts - The list of posts to display.
 */
function generateAndDisplayPosts(posts) {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.textContent = '';
  posts.forEach((post) => {
    const postHtml = generatePostHtml(post);
    postsContainer.appendChild(postHtml);
  });
}

/**
 * Handles the home page by fetching posts and displaying them.
 */
async function handleHomePage() {
  const posts = await readPostsByUser(AUTHOR_NAME);
  generateAndDisplayPosts(posts);
}

handleHomePage();
