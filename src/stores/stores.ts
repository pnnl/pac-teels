/* eslint-disable no-console */
import { writable } from "svelte/store";
import { getItem, setItem, deleteAll, deleteItem } from "./localStorage";

function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()) // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}
function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value);
    }
  }
  return value;
}

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
    //   If there exists chemicals in existing local storage
    if (data) {
      chemicals.update(currChemicals => data);
    }
  })
  .catch(err => console.log("Get chemicals error", err));

chemicals.subscribe(value => {
  // Set the chemicals in local storage when the chemical information changes
  if (value) {
    setItem("chemicals", value, process.env.LOCAL_STORAGE_PASSPHRASE);
  } else {
    //   Delete chemicals data from local storage if we remove it locally
    deleteItem("chemicals");
  }
});

export const selectedChemical: any = writable();
export const rightPanelOpened = writable(false);

//Initialize Chemical State
export const recentlyViewed: any = writable();

getItem("recentlyViewed", process.env.LOCAL_STORAGE_PASSPHRASE)
  .then(data => {
    //   If there exists recent views in existing local storage
    // eslint-disable-next-line no-debugger
    if (data) {
      recentlyViewed.update(currRecentlyViewed => JSON.parse(data, reviver));
    }
  })
  .catch(err => console.log("Get recently viewed error", err));

recentlyViewed.subscribe(value => {
  // Set the recently viewed in local storage when the recently viewed information changes
  if (value) {
    setItem(
      "recentlyViewed",
      JSON.stringify(value, replacer),
      process.env.LOCAL_STORAGE_PASSPHRASE
    );
  } else {
    //   Delete recently viewed data from local storage if we remove it locally
    deleteItem("recentlyViewed");
  }
});
