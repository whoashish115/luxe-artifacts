export default function sitemap() {
  const homePage = {
    url: 'https://luxe-artifacts.vercel.app',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  };

  return [homePage];
}
