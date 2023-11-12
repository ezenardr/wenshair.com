import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseURL = 'https://wenshair.com';
    return [
        {
            url: baseURL,
            lastModified: new Date(),
        },
    ];
}
