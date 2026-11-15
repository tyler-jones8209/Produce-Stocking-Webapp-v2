// js to put navigation bar in each page

document.addEventListener("DOMContentLoaded", () => {

    // create contents of nav bar
    const navigation_html = `
        <nav class="nav_bar">
            <a href="index.html" class="logo">idk_yet</a>
            <ul class="nav_links">
                <li><a href="index.html">To Stock</a></li>
                <li><a href="articles.html">Articles</a></li>
            </ul>
        </nav>
        `;
        
    // look for element in each html file to inject navigation bar into
    const placeholder = document.getElementById("nav_bar_placeholder");
    
    if (placeholder) {
        placeholder.innerHTML = navigation_html;
    }

    // idrk what this be doing ong
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav_links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});