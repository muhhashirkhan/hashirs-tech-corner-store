# Web Development Course 🚀

My HTML & CSS learning journey: 10 lessons, 4 practice projects, and a **final project** that puts everything together.

## ⭐ Final Project: Space Explorer's Club

A 5-page website about space exploration, built with **plain HTML and CSS only** (no JavaScript, no frameworks).

**Open it:** [`final-project/index.html`](final-project/index.html)

| Page | What it shows |
|------|---------------|
| `index.html` | Home page: gradient hero, CSS-animated planet and moon, topic cards, quote, quick facts |
| `missions.html` | Table of famous missions (including Pakistan's iCube-Qamar) and a space race timeline |
| `gallery.html` | Planet images, a video, audio, and an embedded map (iframe) |
| `join.html` | Membership form using many input types, with validation |
| `thanks.html` | The page the form goes to after you submit it |

### How the course lessons are used in the project

| Lesson | Topic | Where it's used in the final project |
|--------|-------|------------------------------------|
| 1 | HTML page structure | Every page: `<!DOCTYPE>`, `<head>`, `<meta>`, `<body>` |
| 2 | Headings & text formatting | `h1`–`h3`, `<strong>`, `<em>`, `<mark>`, `<sub>`, `<sup>`, `<del>`, `<ins>`, `<blockquote>` (Home) |
| 3 | Lists, tables & hyperlinks | Nav menu, check list, timeline `<ol>`, `<dl>`, mission `<table>`, in-page `#links` and external links |
| 4 | Images, audio, video & iframes | Gallery: `<figure>`, `<img>`, `<video>`, `<audio>`, `<iframe>` |
| 5 | Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<time>` |
| 6 | Forms | Join page: text, email, tel, date, select, radio, checkbox, range, textarea, submit/reset, `required` |
| 7 | CSS basics | One external stylesheet (`css/style.css`), element, class and id selectors |
| 8 | Backgrounds, gradients & animations | Starry background, gradient text and buttons, `@keyframes` spin/float/twinkle |
| 10 | Advanced selectors | `>`, `+`, `:hover`, `:nth-child()`, `:not()`, `::before`, `::first-letter`, `[attribute]` |

Extra things learned while building it: CSS variables, Flexbox, Grid, and `@media` queries so the site works on phones.

### Folder structure

```
final-project/
├── index.html
├── missions.html
├── gallery.html
├── join.html
├── thanks.html
├── css/style.css
├── images/   (planet illustrations, logo, video poster)
└── media/    (starfield.mp4, space-hum.mp3)
```

## 🛒 Product Store: Hashir's Tech Corner

A product listing website with **search, category filters, "in stock only", sorting** and a **product popup** with details. This is my first project using JavaScript.

**Open it:** [`product-store/index.html`](product-store/index.html)

### How to change the products

Everything is in **`product-store/js/products.js`**. You don't need to touch the other files.

- **Add a product:** copy one `{ ... },` block, paste it and change the values. Put its picture in `product-store/images/`.
- **Change a price:** edit `price` (and `oldPrice` if you want a "Sale" badge).
- **Mark as sold out:** set `inStock: false`.
- **Turn on WhatsApp orders:** put your number in `STORE_WHATSAPP`, e.g. `"923001234567"`.

```
product-store/
├── index.html      the page layout
├── css/style.css   the design
├── js/products.js  ← the product list (edit this)
├── js/app.js       search, filters, sorting and the popup
└── images/         product pictures
```

## 📚 Lessons & practice projects

| Folder | Topic |
|--------|-------|
| `lesson 1` | HTML structure |
| `lesson 2` | Headings & formatting |
| `lesson 3` | Lists, tables, hyperlinks |
| `lesson 4` | Images, audio/video, iframes |
| `lesson 5` | Semantic HTML |
| `lesson 6` | Forms |
| `lesson 7` | CSS selectors |
| `lesson 8` | Backgrounds, gradients, animations |
| `lesson 10` | Advanced CSS selectors |
| `project 1`–`project 4` | Practice projects (school page, tables & lists, media page) |

## 🌐 Put it online (GitHub Pages)

1. On GitHub, go to **Settings → Pages**.
2. Under **Branch**, pick `main` and `/ (root)`, then **Save**.
3. After a minute the site will be live at:
   - `https://muhhashirkhan.github.io/web-development-course/final-project/`
   - `https://muhhashirkhan.github.io/web-development-course/product-store/`
