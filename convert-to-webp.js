import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/images';
const supportedFormats = ['.jpg', '.jpeg', '.png'];

async function convertToWebP(filePath, outputPath) {
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${filePath} -> ${outputPath}`);
  } catch (error) {
    console.error(`✗ Failed to convert ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      await processDirectory(itemPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (supportedFormats.includes(ext)) {
        const outputPath = path.join(dir, path.basename(item, ext) + '.webp');
        // Skip if WebP version already exists
        if (!fs.existsSync(outputPath)) {
          await convertToWebP(itemPath, outputPath);
        } else {
          console.log(`⚠ WebP version already exists: ${outputPath}`);
        }
      }
    }
  }
}

async function main() {
  console.log('Starting WebP conversion...');
  if (fs.existsSync(inputDir)) {
    await processDirectory(inputDir);
    console.log('WebP conversion completed!');
  } else {
    console.error('Images directory not found:', inputDir);
  }
}

main().catch(console.error);