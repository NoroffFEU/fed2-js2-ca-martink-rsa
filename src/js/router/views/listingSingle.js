import { readPost } from '../../api/post/read';
import { authGuard } from '../../utilities/authGuard';

authGuard();

const listingContainer = document.getElementById('listing-container');

function generatePostHtml(post) {
  const postContainer = document.createElement('article');
  postContainer.classList.add('post');

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

function generateAndDisplayPost(post) {
  const postHtml = generatePostHtml(post);
  listingContainer.appendChild(postHtml);
}

async function handleListingPage() {
  if (!listingContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const post = await readPost(id);

  generateAndDisplayPost(post);
}

handleListingPage();
