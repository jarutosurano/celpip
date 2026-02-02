import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'CELPIP Journey',
    description: 'My CELPIP exam preparation diary',
    site: context.site ?? 'https://jarutosurano.github.io/celpip',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/celpip/blog/${post.slug}/`,
    })),
  });
}
