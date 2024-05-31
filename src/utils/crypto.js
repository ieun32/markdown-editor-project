import CryptoJS from "crypto-js";
import { key } from "../constants/key";

export default class Crypto {
  static encrypt(plainText) {
    const encrypted = CryptoJS.AES.encrypt(plainText, key);
    return encrypted.toString();
  }

  static decrypt(encryptedText) {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
