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
    cell.id = "grid_cell";
    cell.textContent = list_item;
    grid_container.appendChild(cell);
  });
});

