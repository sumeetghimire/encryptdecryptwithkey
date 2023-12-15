const crypto = require('crypto');

class EncryptDecryptWithKey {
  /**
   * Encrypt a string.
   *
   * @param {string} string
   * @returns {string}
   */
  static encryptString(string) {
    const algorithm = 'aes-128-ctr';
    const iv = Buffer.from('1234567891011121', 'utf8');
    const key = process.env.ENCRYPT_KEY || 'nKHWPqRywS';
    const truncatedKey = Buffer.alloc(16);
    Buffer.from(key).copy(truncatedKey);
    const cipher = crypto.createCipheriv(algorithm, truncatedKey, iv);
    let encrypted = cipher.update(string, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
  }

  /**
   * Decrypt a string.
   *
   * @param {string} string
   * @returns {string}
   */
  static decryptString(string) {
    const algorithm = 'aes-128-ctr';
    const iv = Buffer.from('1234567891011121', 'utf8');
    const key = process.env.ENCRYPT_KEY || 'nKHWPqRywS';

    const truncatedKey = Buffer.alloc(16);
    Buffer.from(key).copy(truncatedKey);

    const decipher = crypto.createDecipheriv(algorithm, truncatedKey, iv);

    let decrypted = decipher.update(string, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}

module.exports = EncryptDecryptWithKey;
