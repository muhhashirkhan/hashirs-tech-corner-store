/* =========================================================
   app.js — makes the store work.
   1. Draw the category buttons
   2. Filter + sort the products and draw the cards
   3. Open a popup with details when a card is clicked
   You normally don't need to edit this file:
   change products in products.js instead.
   ========================================================= */

// ---------- Grab the elements we need from the page ----------
const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const stockCheckbox = document.getElementById("in-stock");
const categoryBox = document.getElementById("categories");
const resultCount = document.getElementById("result-count");
const emptyMessage = document.getElementById("empty");
const resetButton = document.getElementById("reset");
const dialog = document.getElementById("product-dialog");

// The current filters (what the visitor has chosen)
const state = {
    search: "",
    category: "all",
    inStockOnly: false,
    sort: "featured"
};

// ---------- Small helper functions ----------

// 8999 -> "Rs 8,999"
function formatPrice(amount) {
    return "Rs " + amount.toLocaleString("en-PK");
}

// 4.6 -> "★★★★★ 4.6" (rounded to the nearest star)
function formatRating(rating) {
    const full = Math.round(rating);
    return "★".repeat(full) + "☆".repeat(5 - full) + " " + rating.toFixed(1);
}

function categoryLabel(id) {
    const found = CATEGORIES.find(function (c) { return c.id === id; });
    return found ? found.label : id;
}

// Create an element with a class and text in one line
function make(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
}

// ---------- 1. Category buttons ----------
function drawCategories() {
    const all = [{ id: "all", label: "All" }].concat(CATEGORIES);

    all.forEach(function (cat) {
        const count = cat.id === "all"
            ? PRODUCTS.length
            : PRODUCTS.filter(function (p) { return p.category === cat.id; }).length;

        const button = make("button", "chip", cat.label + " (" + count + ")");
        button.type = "button";
        button.dataset.category = cat.id;
        button.setAttribute("aria-pressed", cat.id === state.category);

        button.addEventListener("click", function () {
            state.category = cat.id;
            update();
        });
        categoryBox.appendChild(button);
    });
}

// ---------- 2. Filter + sort ----------
function getVisibleProducts() {
    const words = state.search.trim().toLowerCase();

    let list = PRODUCTS.filter(function (p) {
        const matchesCategory = state.category === "all" || p.category === state.category;
        const matchesStock = !state.inStockOnly || p.inStock;
        const text = (p.name + " " + p.description + " " + categoryLabel(p.category)).toLowerCase();
        const matchesSearch = words === "" || text.includes(words);
        return matchesCategory && matchesStock && matchesSearch;
    });

    // .slice() makes a copy so we don't change the original order
    list = list.slice();
    if (state.sort === "price-asc")  list.sort(function (a, b) { return a.price - b.price; });
    if (state.sort === "price-desc") list.sort(function (a, b) { return b.price - a.price; });
    if (state.sort === "rating")     list.sort(function (a, b) { return b.rating - a.rating; });
    if (state.sort === "name")       list.sort(function (a, b) { return a.name.localeCompare(b.name); });
    return list;
}

function drawCard(product) {
    const card = make("article", "card");
    if (!product.inStock) card.classList.add("sold-out");

    // Image + badges
    const media = make("div", "card-media");
    const img = make("img");
    img.src = "images/" + product.image;
    img.alt = product.name;
    img.width = 400;
    img.height = 300;
    img.loading = "lazy";
    media.appendChild(img);

    const badges = make("div", "badges");
    if (product.oldPrice) badges.appendChild(make("span", "badge badge-sale", "Sale"));
    if (product.isNew) badges.appendChild(make("span", "badge badge-new", "New"));
    if (!product.inStock) badges.appendChild(make("span", "badge badge-out", "Sold out"));
    media.appendChild(badges);

    // Text
    const body = make("div", "card-body");
    body.appendChild(make("p", "card-category", categoryLabel(product.category)));

    // The title is a button so keyboard users can open the popup too
    const title = make("h3", "card-title");
    const open = make("button", "card-link", product.name);
    open.type = "button";
    open.addEventListener("click", function () { openDialog(product); });
    title.appendChild(open);
    body.appendChild(title);

    body.appendChild(make("p", "rating", formatRating(product.rating)));

    const price = make("p", "price");
    price.appendChild(make("span", "", formatPrice(product.price)));
    if (product.oldPrice) price.appendChild(make("s", "old-price", formatPrice(product.oldPrice)));
    body.appendChild(price);

    card.append(media, body);

    // Clicking anywhere on the card opens the popup
    card.addEventListener("click", function (event) {
        if (event.target !== open) openDialog(product);
    });
    return card;
}

// Runs every time a filter changes
function update() {
    const list = getVisibleProducts();

    grid.replaceChildren();
    list.forEach(function (p) { grid.appendChild(drawCard(p)); });

    resultCount.textContent = "Showing " + list.length + " of " + PRODUCTS.length + " products";
    emptyMessage.hidden = list.length > 0;

    categoryBox.querySelectorAll(".chip").forEach(function (chip) {
        chip.setAttribute("aria-pressed", chip.dataset.category === state.category);
    });
}

// ---------- 3. Product popup ----------
function openDialog(product) {
    const image = document.getElementById("dialog-image");
    image.src = "images/" + product.image;
    image.alt = product.name;

    document.getElementById("dialog-category").textContent = categoryLabel(product.category);
    document.getElementById("dialog-title").textContent = product.name;
    document.getElementById("dialog-rating").textContent = formatRating(product.rating);
    document.getElementById("dialog-description").textContent = product.description;

    const price = document.getElementById("dialog-price");
    price.replaceChildren(make("span", "", formatPrice(product.price)));
    if (product.oldPrice) {
        price.appendChild(make("s", "old-price", formatPrice(product.oldPrice)));
        const saved = Math.round((1 - product.price / product.oldPrice) * 100);
        price.appendChild(make("span", "badge badge-sale", "Save " + saved + "%"));
    }

    const features = document.getElementById("dialog-features");
    features.replaceChildren();
    (product.features || []).forEach(function (f) { features.appendChild(make("li", "", f)); });

    const stock = document.getElementById("dialog-stock");
    stock.textContent = product.inStock ? "✔ In stock" : "✖ Sold out";
    stock.className = "stock " + (product.inStock ? "in" : "out");

    // Buttons: WhatsApp order (if a number is set) + email
    const actions = document.getElementById("dialog-actions");
    actions.replaceChildren();
    const message = "Hi! I'd like to order: " + product.name + " (" + formatPrice(product.price) + ")";

    if (STORE_WHATSAPP && product.inStock) {
        const wa = make("a", "btn", "Order on WhatsApp");
        wa.href = "https://wa.me/" + STORE_WHATSAPP + "?text=" + encodeURIComponent(message);
        wa.target = "_blank";
        wa.rel = "noopener";
        actions.appendChild(wa);
    }
    const mail = make("a", STORE_WHATSAPP && product.inStock ? "btn btn-light" : "btn", product.inStock ? "Ask about this product" : "Tell me when it's back");
    mail.href = "mailto:hello@example.com?subject=" + encodeURIComponent(product.name) + "&body=" + encodeURIComponent(message);
    actions.appendChild(mail);

    // Remember which product is open in the address bar (so the link can be shared)
    history.replaceState(null, "", "#" + product.id);
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

dialog.addEventListener("close", function () {
    history.replaceState(null, "", location.pathname + location.search);
});
document.getElementById("dialog-close").addEventListener("click", closeDialog);
// Click on the dark area outside the popup to close it
dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeDialog();
});

// ---------- Listen for changes ----------
searchInput.addEventListener("input", function () {
    state.search = searchInput.value;
    update();
});
sortSelect.addEventListener("change", function () {
    state.sort = sortSelect.value;
    update();
});
stockCheckbox.addEventListener("change", function () {
    state.inStockOnly = stockCheckbox.checked;
    update();
});
resetButton.addEventListener("click", function () {
    state.search = "";
    state.category = "all";
    state.inStockOnly = false;
    searchInput.value = "";
    stockCheckbox.checked = false;
    update();
});

// ---------- Start ----------
drawCategories();
update();

// If the link ends in #product-id, open that product straight away
const linked = PRODUCTS.find(function (p) { return "#" + p.id === location.hash; });
if (linked) openDialog(linked);
