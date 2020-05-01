import aesjs from 'aes-js'


export default {
    encrypt(text) { 
        var key = aesjs.utils.utf8.toBytes("MY SECRET KEY IS I AM A SECRET K");

        var iv = aesjs.utils.utf8.toBytes("eh273hs937283jd2");


        var textBytes = aesjs.utils.utf8.toBytes(text)

        var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
        var encryptedBytes = aesCbc.encrypt(aesjs.padding.pkcs7.pad(textBytes))
        var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
        console.log(encryptedHex);

        return encryptedHex;


    }

}
