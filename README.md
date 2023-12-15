# encryptdecryptwithkey


A Node.js package for encrypting and decrypting strings using the AES-128-CTR algorithm with a customizable encryption key.


Installation
To install encryptdecryptwithkey, use the following command:

<pre class="notranslate"><code>npm install encryptdecryptwithkey</code></pre>

<h1>Usage</h1>

<h3>Encryption</h3>

<pre class="notranslate"><code>
const { encryptString } = require('encryptdecryptwithkey');

const originalString = 'Hello, World!';
const encryptedString = encryptString(originalString);

console.log('Original String:', originalString);
console.log('Encrypted String:', encryptedString);  
</code></pre>



<h3>Decryption</h3>
<pre class="notranslate"><code>
const { decryptString } = require('encryptdecryptwithkey');

const encryptedString = 'yourEncryptedStringHere';
const decryptedString = decryptString(encryptedString);

console.log('Encrypted String:', encryptedString);
console.log('Decrypted String:', decryptedString);
</code></pre>

<h1>Environment Variable<h1>

Make sure to set the ENCRYPT_KEY environment variable in your project. If not set, a default key will be used.


<pre class="notranslate"><code>export ENCRYPT_KEY=yourSecretKey</code></pre>

If ENCRYPT_KEY is not set, a default key will be used.

<h1>Contributing<h1>
If you'd like to contribute, please fork the repository and create a pull request. Contributions are welcome!

<h1>Issues</h1>
If you encounter any issues or have questions, please open an issue on the GitHub Issues page.

<h1>License</h1>
This project is licensed under the MIT License - see the LICENSE file for details.

<h1>Acknowledgments<h1>
Special thanks to contributors and the open-source community.


