// register the service worker so the app can work offline / be installed.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

// i will want some persistance for the base list because if someone likes a specific sorting of the items i bet they would not want to
// change the sorting every time they open the websitess
// and obv persistance for whatever they need to stock

// import produce list from seperate file for convenience
import { produce_list } from "./produce_list.js";

const to_stock = {};


function generate_grid_array(input_list) {
  let grid_container = document.getElementById("grid_container");

  const grid_array = Array.from({ length: 1 }, () => Array(input_list.length).fill(0));

  return { grid_container, grid_array };

}

const { grid_container, grid_array } = generate_grid_array(produce_list);

// i should change this to be more specific for rendering the whole produce list (whatever sorting is chosen) 
// and have something seperate for rendering the actual entries list--which is what's added to the things to stock by the user
function render_base_list(input_list, container) {

  // loop grid array and create cells for each item in produce_list (or whichever list is pushed--i should make it a function)
  grid_array.forEach((row, row_index) => {
    row.forEach((val, column_index) => {

      // grab item from list using index
      const list_item = input_list[column_index];

      // create classes for cell and button and add shi
      const cell = document.createElement('div');
      const cell_button = document.createElement('button');
      cell_button.className = "cell_button_class";
      cell.className = "grid_cell_class";
      cell_button.classList.add("text");

      // create path to usable photo based on item name
      const photo_name = list_item.toLowerCase().trim().replaceAll(" ", "_");
      const photo_path = `./produce_images/${photo_name}/stock.png`;

      // photo CSS
      cell.style.backgroundImage = `url(${photo_path})`;
      cell.style.backgroundSize = '170px 170px';

      // insert item name into BUTTON textContent and NOT cell.textContent
      cell_button.textContent = list_item;

      // cell_button.addEventListener('click', (event) => {
      //   console.log(list_item);
      // });

      let holdTimeout;
      let start_time;

      console.log(`start time at beginning of loop: ${start_time}`);

      // Start holding
      const startHold = (event) => {

        if (event.type === 'touchstart') {
          event.preventDefault(); 
        }        

        start_time = performance.now()

        holdTimeout = setTimeout(() => {
          console.log('Hold click triggered!');
        }, 450); // 600ms threshold
      };

      // can't decide what i should actually do with the hold feature
      // thinking one tap/click just ads x1 of an item as a quantity
      // and maybe the hold will add the item as an whole thing rather than a quantified version
      const endHold = (event) => {
        clearTimeout(holdTimeout);

        if (start_time) {
          const hold_duration = performance.now() - start_time

          if (hold_duration < 260.00) {
            if (!to_stock[list_item]) {
              to_stock[list_item] = 1;
            } 
            
            else {
              to_stock[list_item] = to_stock[list_item] + 1;
            }

          }

          console.clear();
          for (const [key, value] of Object.entries(to_stock)) {
            console.log(`${key}: ${value}`);
          }


          start_time = null;
        }

      };

      cell_button.addEventListener('mousedown', startHold);
      cell_button.addEventListener('mouseup', endHold);
      cell_button.addEventListener('mouseleave', endHold);

      // Support mobile touch events as well
      cell_button.addEventListener('touchstart', startHold);
      cell_button.addEventListener('touchend', endHold);

      // okay so im thinking i save each cell in entries and then load the entries array and then render them by appending them to the container
      cell.appendChild(cell_button);

      container.appendChild(cell);
      
    });
  });
}

render_base_list(produce_list, grid_container);