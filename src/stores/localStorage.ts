import CryptoJS from "crypto-js";
import localforage from "localforage";

export const setItem = (key, data, passphrase) => {
  // If passphrase is present, JSON stringify and encrypt string
  if (passphrase) {
    //   ToDo: We may need something more secure than this (especially with user data), but this should be alright for now
    data = CryptoJS.AES.encrypt(JSON.stringify(data), passphrase).toString();
  }
  return localforage.setItem(key, data);
};

export const getItem = (key, passphrase) => {
  return localforage.getItem(key).then(data => {
    // If passphrase is present, decrypt string and parse JSON
    if (data) {
      if (passphrase) {
        const newData = CryptoJS.AES.decrypt(data, passphrase);
        const finalData = newData.toString(CryptoJS.enc.Utf8);
        return JSON.parse(finalData);
      }
      return data;
    } else return null;
  });
};

export const deleteItem = key => {
  return localforage.removeItem(key);
};

export const deleteAll = () => {
  return localforage.clear();
};
