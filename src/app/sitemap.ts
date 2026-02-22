import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://safebite.app';
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
