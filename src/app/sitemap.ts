import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/data';
import { getAllWriteups } from '@/utils/mdx';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.links.github; // Update when domain is active

    const writeups = getAllWriteups().map((writeup) => ({
        url: `${baseUrl}/writeups/${writeup.slug}`,
        lastModified: new Date(writeup.metadata.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const staticPages = [
        '',
        '/projects',
        '/writeups',
        '/terminal',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.9,
    }));

    return [...staticPages, ...writeups];
}
