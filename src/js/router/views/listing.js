import { readPosts } from '../../api/post/read';
import { setLogoutListener } from '../../ui/global/logout';
import { authGuard } from '../../utilities/authGuard';

authGuard();

const listingContainer = document.getElementById('listing-container');
setLogoutListener();

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
 * @param {Object} post.author - The author of the post.
 * @param {string} post.author.name - The name of the author.
 * @returns {HTMLElement} The generated post element.
 */
function generatePostHtml({
  id,
  title,
  body,
  tags,
  media,
  created,
  updated,
  author: { name },
}) {
  const postContainer = document.createElement('article');
  postContainer.classList.add('post', 'container-1');

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const postLink = document.createElement('a');
  postLink.href = `./single/?id=${id}`;
  postLink.appendChild(titleElement);
  postContainer.appendChild(postLink);

  const authorElement = document.createElement('p');
  authorElement.textContent = `Author: ${name}`;

  const authorLink = document.createElement('a');
  authorLink.href = `../profiles/?name=${name}`;
  authorLink.appendChild(authorElement);

  postContainer.appendChild(authorLink);

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

  return postContainer;
}

/**
 * Generates post elements and displays them in the listing container.
 *
 * @param {Object[]} posts - The list of posts to display.
 */
function generatePostsAndDisplay(posts) {
  listingContainer.textContent = '';
  posts.forEach((post) => {
    const postHtml = generatePostHtml(post);
    listingContainer.appendChild(postHtml);
  });
}

/**
 * Handles the listing page.
 */
async function handleListingPage() {
  if (!listingContainer) return;

  const posts = await readPosts();
  generatePostsAndDisplay(posts);
}

handleListingPage();
