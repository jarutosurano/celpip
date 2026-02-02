import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const BLOG_DIR = join(process.cwd(), 'src/content/blog');

describe('Blog Content Validation', () => {
  it('should have valid frontmatter in all blog posts', () => {
    const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

    expect(files.length).toBeGreaterThan(0);

    files.forEach((file) => {
      const content = readFileSync(join(BLOG_DIR, file), 'utf-8');

      // Check frontmatter exists
      expect(content.startsWith('---')).toBe(true);

      // Check required fields
      expect(content).toMatch(/title:\s*["']?.+["']?/);
      expect(content).toMatch(/description:\s*["']?.+["']?/);
      expect(content).toMatch(/pubDate:\s*\d{4}-\d{2}-\d{2}/);
    });
  });

  it('should not have draft posts without draft flag', () => {
    const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

    files.forEach((file) => {
      const content = readFileSync(join(BLOG_DIR, file), 'utf-8');

      // If filename contains "draft", ensure draft: true is set
      if (file.toLowerCase().includes('draft')) {
        expect(content).toMatch(/draft:\s*true/);
      }
    });
  });

  it('should have valid date format in pubDate', () => {
    const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

    files.forEach((file) => {
      const content = readFileSync(join(BLOG_DIR, file), 'utf-8');
      const dateMatch = content.match(/pubDate:\s*(\d{4}-\d{2}-\d{2})/);

      if (dateMatch) {
        const date = new Date(dateMatch[1]);
        expect(date.toString()).not.toBe('Invalid Date');
      }
    });
  });
});

describe('Security Validation', () => {
  it('should not contain hardcoded secrets', () => {
    const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

    const secretPatterns = [
      /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/i,
      /password\s*[:=]\s*['"][^'"]+['"]/i,
      /secret\s*[:=]\s*['"][^'"]+['"]/i,
      /token\s*[:=]\s*['"][^'"]+['"]/i,
    ];

    files.forEach((file) => {
      const content = readFileSync(join(BLOG_DIR, file), 'utf-8');

      secretPatterns.forEach((pattern) => {
        expect(content).not.toMatch(pattern);
      });
    });
  });
});
