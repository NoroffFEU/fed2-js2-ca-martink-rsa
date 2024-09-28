import { readPosts } from '../../api/post/read';
import { authGuard } from '../../utilities/authGuard';

authGuard();

const listingContainer = document.getElementById('listing-container');

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
  postContainer.classList.add('post');

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const postLink = document.createElement('a');
  postLink.href = `./single/?id=${id}`;
  postLink.appendChild(titleElement);
  postContainer.appendChild(postLink);

  const authorElement = document.createElement('p');
  authorElement.textContent = `Author: ${name}`;
  postContainer.appendChild(authorElement);

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

function generatePostsAndDisplay(posts) {
  listingContainer.textContent = '';
  posts.forEach((post) => {
    console.log(post);
    const postHtml = generatePostHtml(post);
    listingContainer.appendChild(postHtml);
  });
}

async function handleListingPage() {
  if (!listingContainer) return;

  const posts = await readPosts();
  generatePostsAndDisplay(posts);
}

handleListingPage();
