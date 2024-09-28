import { createPost } from '../../api/post/create';

export async function onCreatePost(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const title = formData.get('title');
  const body = formData.get('body');
  const tags = formData.get('tags').split(' ');
  const image = formData.get('image');
  const imageAlt = formData.get('image-alt');

  createPost({ title, body, tags, media: { url: image, alt: imageAlt } });
}
