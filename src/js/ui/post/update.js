import { updatePost } from '../../api/post/update';

export async function onUpdatePost(event) {
  event.preventDefault();

  const id = new URLSearchParams(window.location.search).get('id');
  if (!id) return;

  const form = event.target;
  const formData = new FormData(form);
  const title = formData.get('title');
  const body = formData.get('body');
  const tags = formData
    .get('tags')
    .split(',')
    .map((tag) => tag.trim());
  const image = formData.get('image');
  const imageAlt = formData.get('image-alt');

  const media = {
    url: image,
    alt: imageAlt,
  };

  await updatePost(id, { title, body, tags, media });

  window.location.href = `../../listing/single/?id=${id}`;
}
