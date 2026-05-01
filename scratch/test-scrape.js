import fs from 'fs';
import { JSDOM } from 'jsdom';

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

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

async function scrape() {
  const html = await fetchPage('https://ewan.co.in/');
  if (html) {
    console.log("Successfully fetched https://ewan.co.in/");
    const dom = new JSDOM(html);
    const title = dom.window.document.title;
    console.log("Title:", title);
    // test one page
  } else {
    console.log("Failed to fetch. Might be blocked.");
  }
}

scrape();
