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
    const cell_button = document.createElement('button');
    cell_button.className = "cell_button_class";

    cell.className = "grid_cell_class";
    cell_button.classList.add("text");

    const photo_name = list_item.toLowerCase().trim().replaceAll(" ", "_");
    const photo_path = `./produce_images/${photo_name}/stock.png`;

    cell.style.backgroundImage = `url(${photo_path})`;
    cell.style.backgroundSize = '170px 170px';

    cell_button.textContent = list_item;

    cell_button.addEventListener('click', (event) => {
      console.log(list_item);
    });

    cell.appendChild(cell_button);
    grid_container.appendChild(cell);
  });
});

