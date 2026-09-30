# Hashir's Tech Corner

A product listing website with search, category filters, an "in stock only" toggle, sorting and a product popup with details. Built with plain HTML, CSS and JavaScript.

**Live site:** https://muhhashirkhan.github.io/hashirs-tech-corner-store/product-store/

**Open it locally:** [`product-store/index.html`](product-store/index.html)

## How to change the products

Everything is in `product-store/js/products.js`. You don't need to touch the other files.

- **Add a product:** copy one `{ ... },` block, paste it and change the values. Put its picture in `product-store/images/`.
- **Change a price:** edit `price` (and `oldPrice` if you want a "Sale" badge).
- **Mark as sold out:** set `inStock: false`.
- **Turn on WhatsApp orders:** put your number in `STORE_WHATSAPP`, e.g. `"923001234567"`.

```
product-store/
├── index.html      the page layout
├── css/style.css   the design
├── js/products.js  the product list (edit this)
├── js/app.js       search, filters, sorting and the popup
└── images/         product pictures
```

## Put it online (GitHub Pages)

Settings > Pages > Deploy from branch `main`, folder `/ (root)`. The store is served from the `product-store/` folder.
