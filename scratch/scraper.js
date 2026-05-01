import fs from 'fs';
import { JSDOM } from 'jsdom';

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const pagesToScrape = [
  'https://ewan.co.in/',
  'https://ewan.co.in/services/',
  'https://ewan.co.in/language-localization/'
];

async function fetchPage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });
    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
      return null;
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

function extractData(html, url) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Remove scripts and styles
  const scripts = document.querySelectorAll('script, style, noscript, iframe');
  scripts.forEach(s => s.remove());

  const title = document.title;
  
  // Try to find the main content. Often in <main> or <body>
  const main = document.querySelector('main') || document.body;
  
  // Extract text, keeping some structure
  // Let's get all paragraphs, headings, lists
  const textElements = Array.from(main.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, a'));
  
  // Remove duplicates and empty
  const textContent = [];
  const seenTexts = new Set();
  
  // It's better to just get text content and clean it, or get visible text
  // Let's use innerText approximation since we are in JSDOM
  let rawText = main.textContent || "";
  rawText = rawText.replace(/\s+/g, ' ').trim();

  // Extract Media
  const images = Array.from(document.querySelectorAll('img')).map(img => img.src || img.dataset.src).filter(Boolean);
  const videos = Array.from(document.querySelectorAll('video, source')).map(v => v.src).filter(Boolean);
  const links = Array.from(document.querySelectorAll('a')).map(a => a.href).filter(Boolean);
  
  // Make URLs absolute
  const makeAbsolute = (link) => {
    try {
      return new URL(link, url).href;
    } catch {
      return link;
    }
  };

  const absoluteImages = [...new Set(images.map(makeAbsolute))];
  const absoluteVideos = [...new Set(videos.map(makeAbsolute))];
  const absoluteLinks = [...new Set(links.map(makeAbsolute))];

  return {
    url,
    title,
    text: rawText.substring(0, 5000), // Limiting to first 5000 chars for readability
    media: {
      images: absoluteImages,
      videos: absoluteVideos
    },
    links: absoluteLinks
  };
}

async function scrapeAll() {
  let mdContent = '# Ewan Website Scraped Data\n\n';
  
  for (const url of pagesToScrape) {
    console.log(`Scraping ${url}...`);
    const html = await fetchPage(url);
    if (!html) {
      mdContent += `## ${url}\nFailed to fetch.\n\n`;
      continue;
    }
    
    const data = extractData(html, url);
    
    mdContent += `## ${data.title}\n`;
    mdContent += `**URL:** ${data.url}\n\n`;
    mdContent += `### Text Content Summary (First 5000 chars)\n`;
    mdContent += `${data.text}\n\n`;
    mdContent += `### Media Assets\n`;
    mdContent += `**Images:**\n`;
    if (data.media.images.length > 0) {
      data.media.images.forEach(img => mdContent += `- ${img}\n`);
    } else {
      mdContent += `- None found\n`;
    }
    mdContent += `\n**Videos:**\n`;
    if (data.media.videos.length > 0) {
      data.media.videos.forEach(vid => mdContent += `- ${vid}\n`);
    } else {
      mdContent += `- None found\n`;
    }
    mdContent += `\n---\n\n`;
  }
  
  fs.writeFileSync('scraped-ewan-data.md', mdContent);
  console.log('Scraping complete. Data saved to scraped-ewan-data.md');
}

scrapeAll();
