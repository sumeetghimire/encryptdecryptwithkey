// generate-env.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

try {
  // Set ENCRYPT_KEY in process.env or generate a random key
  process.env.ENCRYPT_KEY = process.env.ENCRYPT_KEY || crypto.randomBytes(16).toString('hex');

  const envFilePath = path.join('../../', '.env');

  if (fs.existsSync(envFilePath)) {
    let existingContent = fs.readFileSync(envFilePath, 'utf-8').trim();

    if (!existingContent.includes('ENCRYPT_KEY')) {
      existingContent += `\nENCRYPT_KEY=${process.env.ENCRYPT_KEY}`;
      fs.writeFileSync(envFilePath, existingContent + '\n');
      console.log('.env file updated with the ENCRYPT_KEY.');
    } else {
      console.log('ENCRYPT_KEY already exists in the .env file. No changes made.');
    }
  } else {
    console.warn('.env file not found in the parent directory. Creating one.');

    fs.writeFileSync(envFilePath, `ENCRYPT_KEY=${process.env.ENCRYPT_KEY}\n`);
    console.log('.env file created with the ENCRYPT_KEY.');
  }
} catch (error) {
  console.error('Error generating/updating .env file:', error.message);
}
