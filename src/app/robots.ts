import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/data';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${siteConfig.links.github}/sitemap.xml`, // Change to actual domain when hosted
    }
}
