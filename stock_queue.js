const raw_queue = sessionStorage.getItem("stock_queue");

const stock_object = raw_queue ? JSON.parse(raw_queue) : {};

const list_container = document.getElementById("stock_queue_list");

const entries = Object.entries(stock_object);

if (entries.length === 0) {
    list_container.textContent = "Your stock queue is empty.";
}

else {
    entries.forEach(([item_name, quantity]) => {
        const list_item = document.createElement("li");
        list_item.textContent = `${item_name}: ${quantity}`;
        list_container.appendChild(list_item);
    });
}