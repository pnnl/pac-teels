/* eslint-disable no-console */
import { writable } from "svelte/store";
import { getItem, setItem, deleteAll, deleteItem } from "./localStorage";

//Initialize User State
export const user: any = writable();

getItem("user", process.env.LOCAL_STORAGE_PASSPHRASE)
  .then(data => {
    //   If there exists a user in existing local storage
    if (data) {
      user.update(currUser => data);
    }
  })
  .catch(err => console.log("Get user error", err));

user.subscribe(value => {
  // Set the user in local storage when the user information changes
  if (value) {
    setItem("user", value, process.env.LOCAL_STORAGE_PASSPHRASE);
  } else {
    //   Delete user data from local storage if we remove it locally
    deleteItem("user");
  }
});

export const currPass: any = writable();

//Initialize Chemical State
export const chemicals: any = writable();

getItem("chemicals", process.env.LOCAL_STORAGE_PASSPHRASE)
  .then(data => {
    //   If there exists a user in existing local storage
    if (data) {
      chemicals.update(currChemicals => data);
    }
  })
  .catch(err => console.log("Get chemicals error", err));

chemicals.subscribe(value => {
  // Set the chemicals in local storage when the user information changes
  if (value) {
    setItem("chemicals", value, process.env.LOCAL_STORAGE_PASSPHRASE);
  } else {
    //   Delete chemicals data from local storage if we remove it locally
    deleteItem("chemicals");
  }
});
