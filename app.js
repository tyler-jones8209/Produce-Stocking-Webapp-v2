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

    const photo_name = list_item.toLowerCase().trim().replaceAll(" ", "_");
    const photo_path = `./produce_images/${photo_name}/stock.png`;
    console.log(photo_path);

    //if (photo_path == "./produce_images/baby_spinach/stock.png") {
    //  cell.style.backgroundImage = `url(${photo_path})`;
    //  cell.style.backgroundSize = '170px 170px';
    //}

    cell.style.backgroundImage = `url(${photo_path})`;
    cell.style.backgroundSize = '170px 170px';

    cell.textContent = list_item;
    grid_container.appendChild(cell);
  });
});

