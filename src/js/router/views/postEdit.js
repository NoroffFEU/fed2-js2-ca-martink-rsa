import { readPost } from '../../api/post/read';
import { setLogoutListener } from '../../ui/global/logout';
import { onUpdatePost } from '../../ui/post/update';
import { authGuard } from '../../utilities/authGuard';

authGuard();
setLogoutListener();

const form = document.forms.editPost;
form.addEventListener('submit', onUpdatePost);

/**
 * Displays the current values of the post in the edit form.
 *
 * @param {Object} post - The post object.
 */
function displayCurrentPostValues(post) {
  form.title.value = post.title;
  form.body.value = post.body;
  form.tags.value = post.tags.join(', ');
  form.image.value = post.media.url;
  form['image-alt'].value = post.media.alt;
}

/**
 * Handles the post edit process.
 */
async function handlePostEdit() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (!id) return;

  const post = await readPost(id);

  displayCurrentPostValues(post);
}

handlePostEdit();
