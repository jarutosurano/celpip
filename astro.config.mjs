import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://jarutosurano.github.io',
  base: '/celpip',
  integrations: [
    starlight({
      title: 'CELPIP Study Guide',
      description: 'Comprehensive CELPIP exam preparation guide',
      logo: {
        src: './public/favicon.png',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/jarutosurano/celpip' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'guides/introduction' },
            { label: 'Test Overview', slug: 'guides/test-overview' },
            { label: 'Study Plan', slug: 'guides/study-plan' },
          ],
        },
        {
          label: 'Listening',
          items: [
            { label: 'Overview', slug: 'listening/overview' },
            { label: 'Strategies', slug: 'listening/strategies' },
            { label: 'Practice Tips', slug: 'listening/practice-tips' },
          ],
        },
        {
          label: 'Reading',
          items: [
            { label: 'Overview', slug: 'reading/overview' },
            { label: 'Strategies', slug: 'reading/strategies' },
            { label: 'Practice Tips', slug: 'reading/practice-tips' },
            { label: 'Part 1: Correspondence', slug: 'reading/part-1-correspondence' },
            { label: 'Part 2: Diagram', slug: 'reading/part-2-diagram' },
            { label: 'Part 3: Information', slug: 'reading/part-3-information' },
            { label: 'Part 4: Viewpoints', slug: 'reading/part-4-viewpoints' },
          ],
        },
        {
          label: 'Writing',
          items: [
            { label: 'Overview', slug: 'writing/overview' },
            { label: 'Task 1: Email', slug: 'writing/task-1-email' },
            { label: 'Task 2: Survey', slug: 'writing/task-2-survey' },
            { label: 'Templates', slug: 'writing/templates' },
          ],
        },
        {
          label: 'Speaking',
          items: [
            { label: 'Overview', slug: 'speaking/overview' },
            { label: 'All 8 Tasks', slug: 'speaking/all-tasks' },
            { label: 'Strategies', slug: 'speaking/strategies' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Free Resources', slug: 'resources/free' },
            { label: 'Paid Resources', slug: 'resources/paid' },
            { label: 'YouTube Channels', slug: 'resources/youtube' },
          ],
        },
      ],
      customCss: ['./src/styles/starlight-custom.css'],
      components: {
        // Override to add link back to main site
        SiteTitle: './src/components/StarlightSiteTitle.astro',
      },
    }),
    mdx(),
    sitemap(),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
  security: {
    checkOrigin: true,
  },
});
