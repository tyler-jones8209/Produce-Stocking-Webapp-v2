// register the service worker so the app can work offline / be installed.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

// import produce list from seperate file for convenience
import { produce_list } from "./produce_list.js";

let grid_container = document.getElementById("grid_container")

const grid_array = Array.from({ length: 1 }, () => Array(produce_list.length).fill(0));

grid_array.forEach((row, row_index) => {
  row.forEach((val, column_index) => {
    const list_item = produce_list[column_index];
    const cell = document.createElement('div');

    // ideally the CSS would be handled in the CSS file instead of here but idk how to do that
    cell.style.width = '170px';
    cell.style.height = '170px';
    cell.style.background = '#ccc';
    cell.textContent = list_item;
    cell.style.textAlign = 'bottom';
    grid_container.appendChild(cell);
  });
});

