
export default {
  external: ['node-forge'],
  output: {
    format: 'iife',
    name: 'forge',
    globals: {
      nodeForge: 'forge'
    }
  }
}

export function rsa() {

  // Assuming node-forge is available as `forge`
  document.getElementById('triggerButton').onclick = function() {
    document.getElementById('encryptionDialog').style.display = 'block';
  };

  let privateKey, publicKey;

// Generate a new RSA key pair
  forge.pki.rsa.generateKeyPair({bits: 2048, workers: 2}, function(err, keypair) {
    privateKey = keypair.privateKey;
    publicKey = keypair.publicKey;
  });

  document.getElementById('encryptButton').onclick = function() {
    const message = document.getElementById('messageInput').value;
    const password = document.getElementById('passwordInput').value;

    // Encrypt the message with the public key
    const encryptedMessage = publicKey.encrypt(message + password);

    document.getElementById('resultDisplay').textContent = 'Encrypted: ' + encryptedMessage;
  };

  document.getElementById('decryptButton').onclick = function() {
    const encryptedMessage = document.getElementById('messageInput').value;
    const password = document.getElementById('passwordInput').value;

    // Decrypt the message with the private key
    const decryptedMessage = privateKey.decrypt(encryptedMessage);

    if (decryptedMessage.endsWith(password)) {
      document.getElementById('resultDisplay').textContent = 'Decrypted: ' + decryptedMessage.replace(password, '');
    } else {
      document.getElementById('resultDisplay').textContent = 'Decryption failed. Wrong password.';
    }
  };
}
