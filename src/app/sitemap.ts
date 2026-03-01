import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://safe-bite-landing.vercel.app'; // TODO: update to production domain when ready
    const locales = ['en', 'es'];
    const paths = ['', '/privacy', '/terms', '/support', '/age-rating', '/credits'];

    const sitemap: MetadataRoute.Sitemap = [];

    locales.forEach((locale) => {
        paths.forEach((path) => {
            sitemap.push({
                url: `${baseUrl}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: path === '' ? 1 : 0.8,
            });
        });
    });

    return sitemap;
}
