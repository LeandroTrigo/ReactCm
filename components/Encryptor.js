import aesjs from 'aes-js'


export default {
    encrypt(text) {
        // An example 128-bit key
        var key = "MY SECRET KEY IS I AM A SECRET K"

        // The initialization vector (must be 16 bytes)
        var ivstring = "hidjY7dndihdUY65"
        var iv = aesjs.utils.utf8.toBytes(ivstring);


        var textBytes = aesjs.utils.utf8.toBytes(text);

        var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
        var encryptedBytes = aesCbc.encrypt(textBytes);

        // To print or store the binary data, you may convert it to hex
        var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
        console.log(encryptedHex);


    },
    decrypt() {

        // When ready to decrypt the hex string, convert it back to bytes
        var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
        // The cipher-block chaining mode of operation maintains internal
        // state, so to decrypt a new instance must be instantiated.
        var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
        var decryptedBytes = aesCbc.decrypt(encryptedBytes);
        // Convert our bytes back into text
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        console.log(decryptedText);
        // "TextMustBe16Byte"
    }

}
