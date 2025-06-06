import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about' },
  { url: '/skills' },
  { url: '/projects' },
  { url: '/experience' },
  { url: '/education' },
  { url: '/blogs' },
  { url: '/contact' },
  { url: '/privacy-policy' },
  { url: '/terms-of-use' },
];

const stream = new SitemapStream({
  hostname: 'https://nikhil-raghupathy-portfolio.vercel.app',
});

const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    writeStream.write(data.toString());
    writeStream.end();
    console.log('✅ Sitemap generated!');
  })
  .catch((err) => {
    console.error(err);
  });
