import { deletePost } from '../../api/post/delete';

/**
 * Deletes a post.
 *
 * @param {string} id - The ID of the post to delete.
 * @param {Function} onSuccessCallback - The callback to run on success.
 */
export async function onDeletePost(id, onSuccessCallback) {
  try {
    await deletePost(id);
    onSuccessCallback();
  } catch (error) {
    console.error(error);
  }
}
