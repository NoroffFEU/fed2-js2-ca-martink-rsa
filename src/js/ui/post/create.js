import { createPost } from '../../api/post/create';

/**
 * Handles the post creation process.
 *
 * @param {Event} event - The event object from the form submission.
 * @returns {void}
 */
export async function onCreatePost(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const title = formData.get('title');
  const body = formData.get('body');
  const tags = formData.get('tags').split(' ');
  const image =
    formData.get('image') ||
    'https://images.unsplash.com/photo-1726502292828-d96388c6250f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D';
  const imageAlt = formData.get('image-alt') || 'Default image alt text';

  createPost({ title, body, tags, media: { url: image, alt: imageAlt } });
}
