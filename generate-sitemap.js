const sitemap = require('svelte-sitemap');

(async () => {
  try {
    await sitemap({
      staticDir: './build',
      outputDir: './build',
      baseUrl: 'https://portfolio-update-amrelsherbiny.netlify.app/', // Your website URL
      routes: [
        // Add your website routes here
        { url: '/', changefreq: 'monthly', priority: 1.0 },
        { url: '//AboutMe', changefreq: 'monthly', priority: 0.7 },
        { url: '//Skills', changefreq: 'monthly', priority: 0.7 },
        { url: '//Projects', changefreq: 'monthly', priority: 0.7 },
        
        // Add more routes as needed
      ]
    });
    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
})();
