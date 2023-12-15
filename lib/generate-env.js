const fs = require('fs');
const crypto = require('crypto');

try {
  // Generate a random key
  const randomKey = crypto.randomBytes(16).toString('hex');

  // Write the key to the .env file
  fs.writeFileSync('.env', `ENCRYPT_KEY=${randomKey}\n`);

  console.log('.env file generated with a random ENCRYPT_KEY.');
} catch (error) {
  console.error('Error generating .env file:', error.message);
}
