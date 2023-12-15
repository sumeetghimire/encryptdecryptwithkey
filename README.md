# encryptdecryptwithkey


A Node.js package for encrypting and decrypting strings using the AES-128-CTR algorithm with a customizable encryption key.


Installation
To install encryptdecryptwithkey, use the following command:

<pre class="notranslate"><code>npm install encryptdecryptwithkey</code></pre>

<h1>Usage</h1>

<h2>Encryption</h2>

<pre class="notranslate"><code>
const { encryptString } = require('encryptdecryptwithkey');

const originalString = 'Hello, World!';
const encryptedString = encryptString(originalString);

console.log('Original String:', originalString);
console.log('Encrypted String:', encryptedString);  
</code></pre>
