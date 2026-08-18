// register the service worker so the app can work offline / be installed.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

let grid = document.getElementById("grid_container")

// import produce list from seperate file for convenience
import { produce_list } from "./produce_list.js";

for (item in produce_list) {

    console.log(item);

}

