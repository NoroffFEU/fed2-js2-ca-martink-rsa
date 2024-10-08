import { readPost } from '../../api/post/read';
import { setLogoutListener } from '../../ui/global/logout';
import { authGuard } from '../../utilities/authGuard';

authGuard();

const listingContainer = document.getElementById('listing-container');
setLogoutListener();

/**
 * Generates an HTML element for a post.
 *
 * @param {Object} post - The post data.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body of the post.
 * @param {string[]} [post.tags] - The tags associated with the post.
 * @param {Object} [post.media] - The media associated with the post.
 * @param {string} post.created - The creation timestamp of the post.
 * @param {string} [post.updated] - The last update timestamp of the post.
 * @param {Object} post.author - The author of the post.
 * @param {string} post.author.name - The name of the author.
 * @returns {HTMLElement} The generated post element.
 */
function generatePostHtml(post) {
  const postContainer = document.createElement('article');
  postContainer.classList.add('post', 'container-1');

  const titleElement = document.createElement('h2');
  titleElement.textContent = post.title;
  postContainer.appendChild(titleElement);

  const bodyElement = document.createElement('p');
  bodyElement.textContent = post.body;
  postContainer.appendChild(bodyElement);

  if (post.tags && post.tags.length > 0) {
    const tagsElement = document.createElement('ul');
    post.tags.forEach((tag) => {
      if (!tag) return;
      const tagItem = document.createElement('li');
      tagItem.textContent = tag;
      tagsElement.appendChild(tagItem);
    });
    postContainer.appendChild(tagsElement);
  }

  if (post.media) {
    const mediaElement = document.createElement('img');
    mediaElement.src = post.media.url;
    postContainer.appendChild(mediaElement);
  }

  const createdElement = document.createElement('time');
  createdElement.dateTime = post.created;
  createdElement.textContent = `Created: ${new Date(post.created).toLocaleString()}`;
  postContainer.appendChild(createdElement);

  if (post.updated) {
    const updatedElement = document.createElement('time');
    updatedElement.dateTime = post.updated;
    updatedElement.textContent = `Updated: ${new Date(post.updated).toLocaleString()}`;
    postContainer.appendChild(updatedElement);
  }

  return postContainer;
}

/**
 * Generates and displays a post on the page.
 *
 * @param {Object} post - The post data.
 */
function generateAndDisplayPost(post) {
  const postHtml = generatePostHtml(post);
  listingContainer.appendChild(postHtml);
}

/**
 * Handles the listing single page.
 */
async function handleListingPage() {
  if (!listingContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const post = await readPost(id);

  generateAndDisplayPost(post);
}

handleListingPage();
