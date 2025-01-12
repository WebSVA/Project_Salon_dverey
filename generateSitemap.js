const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Создание потока для карты сайта
const sitemap = new SitemapStream({ hostname: 'https://websva-project-salon-dverey-2739.twc1.net/.com' }); 

// Добавление URL-адресов
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/catalog', changefreq: 'weekly', priority: 0.7 });
sitemap.write({ url: '/catalog/interior-doors', changefreq: 'weekly', priority: 0.7 });
sitemap.write({ url: '/catalog/entry-doors', changefreq: 'weekly', priority: 0.7 });
// Добавьте другие страницы вашего сайта
sitemap.end();

// Генерация карты сайта и сохранение в файл
streamToPromise(sitemap).then((data) => {
    fs.writeFileSync('public/sitemap.xml', data.toString());
    console.log('Карта сайта успешно создана: public/sitemap.xml');
});