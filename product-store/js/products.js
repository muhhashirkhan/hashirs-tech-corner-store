/* =========================================================
   PRODUCTS — edit this file to change what the store shows.
   Each product is an object inside the array.

   id        a unique short name (no spaces)
   name      product name
   category  must match one of the CATEGORIES below
   price     price in rupees (number, no commas)
   oldPrice  optional: the old price, shows a "Sale" badge
   rating    0 to 5
   image     file inside the images/ folder
   inStock   true or false
   isNew     optional: true shows a "New" badge
   description  shown in the product popup
   features  list of bullet points for the popup
   ========================================================= */

// Your WhatsApp number in international format, digits only (e.g. 923001234567).
// Leave it empty ("") to hide the "Order on WhatsApp" button.
const STORE_WHATSAPP = "";

const CATEGORIES = [
    { id: "audio",       label: "Audio" },
    { id: "wearables",   label: "Wearables" },
    { id: "accessories", label: "Accessories" },
    { id: "gaming",      label: "Gaming & PC" }
];

const PRODUCTS = [
    {
        id: "headphones",
        name: "Wireless Over-Ear Headphones",
        category: "audio",
        price: 8999,
        oldPrice: 11499,
        rating: 4.6,
        image: "headphones.svg",
        inStock: true,
        description: "Soft over-ear cushions, deep bass and up to 40 hours of battery on a single charge.",
        features: ["Bluetooth 5.3", "40-hour battery", "Foldable design", "Built-in microphone"]
    },
    {
        id: "earbuds",
        name: "True Wireless Earbuds",
        category: "audio",
        price: 4499,
        rating: 4.3,
        image: "earbuds.svg",
        inStock: true,
        isNew: true,
        description: "Pocket-sized earbuds with a charging case, touch controls and clear calls.",
        features: ["Touch controls", "6 h + 24 h with case", "Sweat resistant", "USB-C charging"]
    },
    {
        id: "speaker",
        name: "Portable Bluetooth Speaker",
        category: "audio",
        price: 6250,
        rating: 4.5,
        image: "speaker.svg",
        inStock: false,
        description: "Loud, splash-proof speaker for the room, the roof or a road trip.",
        features: ["12 W output", "Splash proof", "12-hour battery", "Pair two speakers"]
    },
    {
        id: "smartwatch",
        name: "Smart Watch Pro",
        category: "wearables",
        price: 12999,
        oldPrice: 14999,
        rating: 4.4,
        image: "smartwatch.svg",
        inStock: true,
        description: "Bright touch screen that tracks steps, heart rate and sleep, and shows phone notifications.",
        features: ["1.8\" touch screen", "Heart-rate monitor", "7-day battery", "Water resistant"]
    },
    {
        id: "fitness-band",
        name: "Fitness Band",
        category: "wearables",
        price: 3499,
        rating: 4.1,
        image: "fitness-band.svg",
        inStock: true,
        description: "Light, simple band for counting steps and tracking workouts.",
        features: ["Step counter", "10 workout modes", "14-day battery", "Silicone strap"]
    },
    {
        id: "smart-glasses",
        name: "Blue-Light Smart Glasses",
        category: "wearables",
        price: 7999,
        rating: 3.9,
        image: "smart-glasses.svg",
        inStock: true,
        isNew: true,
        description: "Glasses that filter blue light from screens and have open-ear speakers for music.",
        features: ["Blue-light filter", "Open-ear audio", "Touch controls", "Lightweight frame"]
    },
    {
        id: "power-bank",
        name: "20,000 mAh Power Bank",
        category: "accessories",
        price: 5299,
        rating: 4.7,
        image: "power-bank.svg",
        inStock: true,
        description: "Charges a phone about 4 times. Fast charging over USB-C.",
        features: ["20,000 mAh", "22.5 W fast charge", "2 USB ports + USB-C", "LED battery meter"]
    },
    {
        id: "usb-c-cable",
        name: "Braided USB-C Cable (2 m)",
        category: "accessories",
        price: 899,
        oldPrice: 1299,
        rating: 4.2,
        image: "usb-c-cable.svg",
        inStock: true,
        description: "Strong braided cable that won't tangle, for phones, tablets and laptops.",
        features: ["2 metres long", "60 W charging", "Nylon braided", "Data transfer"]
    },
    {
        id: "laptop-stand",
        name: "Aluminium Laptop Stand",
        category: "accessories",
        price: 3799,
        rating: 4.5,
        image: "laptop-stand.svg",
        inStock: true,
        description: "Raises your laptop to eye level for better posture and airflow.",
        features: ["6 height levels", "Fits 10\"–16\" laptops", "Folds flat", "Non-slip pads"]
    },
    {
        id: "backpack",
        name: "Laptop Backpack",
        category: "accessories",
        price: 4999,
        rating: 4.4,
        image: "backpack.svg",
        inStock: false,
        description: "Water-resistant backpack with a padded laptop pocket and lots of space for books.",
        features: ["Fits 15.6\" laptop", "Water resistant", "USB charging port", "Padded straps"]
    },
    {
        id: "game-controller",
        name: "Wireless Game Controller",
        category: "gaming",
        price: 5999,
        rating: 4.6,
        image: "game-controller.svg",
        inStock: true,
        description: "Comfortable controller that works with PC and Android phones.",
        features: ["PC and Android", "Dual vibration", "Rechargeable", "Bluetooth + USB"]
    },
    {
        id: "mechanical-keyboard",
        name: "Mechanical Keyboard RGB",
        category: "gaming",
        price: 9499,
        oldPrice: 10999,
        rating: 4.8,
        image: "mechanical-keyboard.svg",
        inStock: true,
        description: "Clicky mechanical switches and colourful lighting for gaming and typing.",
        features: ["Mechanical switches", "RGB lighting", "Anti-ghosting keys", "Detachable cable"]
    },
    {
        id: "gaming-mouse",
        name: "Gaming Mouse",
        category: "gaming",
        price: 2999,
        rating: 4.3,
        image: "gaming-mouse.svg",
        inStock: true,
        description: "Light, precise mouse with adjustable speed (DPI) and side buttons.",
        features: ["Up to 7,200 DPI", "6 buttons", "RGB lighting", "Braided cable"]
    },
    {
        id: "webcam",
        name: "Full HD Webcam",
        category: "gaming",
        price: 4299,
        rating: 4.0,
        image: "webcam.svg",
        inStock: true,
        isNew: true,
        description: "1080p camera for online classes, video calls and streaming.",
        features: ["1080p at 30 fps", "Built-in microphone", "Clip-on mount", "Plug and play"]
    }
];
