import fs from 'fs';
import path from 'path';

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const assetsToDownload = [
  'https://www.ewan.co.in/wp-content/uploads/2022/10/Ewan-Logo-V3-500-290.png',
  'https://www.ewan.co.in/wp-content/uploads/2024/11/Ewan-logo-with-TM-min.png',
  'https://ewan.co.in/wp-content/uploads/2025/01/cn-flag.png',
  'https://ewan.co.in/wp-content/uploads/2025/01/jp-flag.png',
  'https://www.ewan.co.in/wp-content/uploads/2025/01/global-talkies-img2.png',
  'https://www.ewan.co.in/wp-content/uploads/2025/08/bsnssltn-4-min.jpg',
  'https://www.ewan.co.in/wp-content/uploads/2024/09/Building-Strong-International-Ties-Header-img-V2.jpg'
];

const downloadDir = path.join(process.cwd(), 'public', 'page-assets');

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

async function downloadFile(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
      }
    });
    
    if (!response.ok) {
      console.error(`Failed to download ${url}: ${response.status}`);
      return;
    }
    
    const buffer = await response.arrayBuffer();
    const filename = path.basename(new URL(url).pathname);
    const dest = path.join(downloadDir, filename);
    
    fs.writeFileSync(dest, Buffer.from(buffer));
    console.log(`Successfully downloaded: ${filename}`);
  } catch (error) {
    console.error(`Error downloading ${url}:`, error.message);
  }
}

async function run() {
  console.log('Downloading assets to public/page-assets/...');
  for (const url of assetsToDownload) {
    await downloadFile(url);
  }
  console.log('Done!');
}

run();
