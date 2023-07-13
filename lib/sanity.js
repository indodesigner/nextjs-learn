import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'awsx4pwb',
  dataset: 'production',
  useCdn: true, // Enable CDN caching for faster responses (optional)
});

export const fetchBlogPosts = async () => {
  const query = `*[_type == "blog"]{
    title,
    content
  }`;
  const result = await sanityClient.fetch(query);
  return result;
};
