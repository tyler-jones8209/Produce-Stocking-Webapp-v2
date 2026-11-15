const raw_queue = sessionStorage.getItem("stock_queue");

const stock_array = raw_queue ? JSON.parse(raw_queue) : [];

console.log(stock_array);

const stock_queue_element = document.getElementById('stock_queue_placeholder');

stock_queue_element.textContent = stock_array[0];
