const crypto = require('crypto');

class EncryptDecryptWithKey {
  /**
   * Encrypt a string.
   *
   * @param {string} string
   * @returns {string}
   */
  static encryptString(string) {
    const algorithm = 'aes-256-gcm';
    const iv = crypto.randomBytes(16);
    const key = process.env.ENCRYPT_KEY || 'nKHWPqRywS';
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(string, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    const authTag = cipher.getAuthTag().toString('base64');
    return `${iv.toString('base64')}:${encrypted}:${authTag}`;
  }

  /**
   * Decrypt a string.
   *
   * @param {string} string
   * @returns {string}
   */
  static decryptString(string) {
    const algorithm = 'aes-256-gcm';
    const [ivString, encrypted, authTag] = string.split(':');
    const iv = Buffer.from(ivString, 'base64');
    const key = process.env.ENCRYPT_KEY || 'nKHWPqRywS';
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    decipher.setAuthTag(Buffer.from(authTag, 'base64'));
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}

module.exports = EncryptDecryptWithKey;
