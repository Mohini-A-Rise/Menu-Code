// Menu data structure
const menuData = {
  vegPulao: {
    category: "Veg Pulao",
    image: "/images/Food Images/pulao.jpg",
    items: [
      { name: "Veg Pulao", price: "129", discountedPrice: "99" },
      { name: "Masala Pulao", price: "129", discountedPrice: "109" },
      { name: "Soya Pulao", price: "139", discountedPrice: "109" },
      { name: "Aalu Matter Pulao", price: "139", discountedPrice: "109" },
      { name: "Veg Tava Pulao", price: "149", discountedPrice: "119" },
      { name: "Jain Pulao", price: "149", discountedPrice: "119" },
      { name: "Navratna Pulao", price: "159", discountedPrice: "129" },
      { name: "Shahi Paneer Pulao", price: "159", discountedPrice: "129" },
      { name: "Mushroom Pulao", price: "169", discountedPrice: "139" },
      { name: "Sprout Pulao", price: "169", discountedPrice: "139" },
      { name: "Egg Pulao", price: "169", discountedPrice: "139" },
      { name: "EggKheema Pulao", price: "169", discountedPrice: "139" },
    ],
  },
  khichdi: {
    category: "Khichdi",
    image: "images/Food Images/Khichdi.jpg",
    items: [
      { name: "Plain Dal Khichadi", price: "109", discountedPrice: "89" },
      { name: "Dhaba Style Khichadi", price: "129", discountedPrice: "99" },
      { name: "Masala Dal Khichadi", price: "129", discountedPrice: "99" },
      { name: "Veg Masala Dal Khichadi", price: "139", discountedPrice: "109" },
      { name: "Thecha Khichadi", price: "139", discountedPrice: "109" },
      { name: "Bisibele Bhaat", price: "149", discountedPrice: "119" },
      { name: "Palak Khichadi", price: "149", discountedPrice: "119" },
    ],
  },
  biryani: {
    category: "Biryani",
    image: "/images/Food Images/veg-biryani.jpg",
    items: [
      { name: "Veg Biryani", price: "189", discountedPrice: "149" },
      { name: "Paneer Tikka Biryani", price: "229", discountedPrice: "199" },
      {
        name: "Veg Hyderabadi Dum Biryani",
        price: "229",
        discountedPrice: "199",
      },
      { name: "Mushroom Biryani", price: "229", discountedPrice: "199" },
      { name: "Egg Biryani", price: "229", discountedPrice: "199" },
      { name: "Veg Hundi Biryani", price: "249", discountedPrice: "219" },
    ],
  },
  combo: {
    category: "Combo",
    image: "/images/Food Images/Rajma-Chawal.jpg",
    items: [
      { name: "Masala Rice", price: "129", discountedPrice: "99" },
      { name: "Chole Rice", price: "149", discountedPrice: "119" },
      { name: "Rajama Rice", price: "149", discountedPrice: "119" },
    ],
  },
  sweets: {
    category: "Sweets",
    image: "/images/Food Images/ukadiche_modak.jpg",
    items: [
      { name: "Ukdiche Modak (Per Piece)", price: "15", discountedPrice: "10" },
      {
        name: "Kesariya Birang (Per Plate)",
        price: "20",
        discountedPrice: "15",
      },
      { name: "Kheer (Per Plate)", price: "20", discountedPrice: "15" },
      {
        name: "Caramelised Kheer (Per Plate)",
        price: "20",
        discountedPrice: "15",
      },
      { name: "Payasam (Per Plate)", price: "20", discountedPrice: "15" },
    ],
  },
  chinese: {
    category: "Chinese",
    image: "/images/Food Images/chinese.jpg",
    items: [
      { name: "Veg Fried Rice", price: "139", discountedPrice: "109" },
      { name: "Veg Schezwan Rice", price: "149", discountedPrice: "119" },
      { name: "Cocktail Rice", price: "159", discountedPrice: "129" },
    ],
  },
};

// Function to create menu category card
function createMenuCard(categoryData) {
  const card = document.createElement("div");
  card.className = "menu-card rounded-lg overflow-hidden shadow-lg";

  const header = document.createElement("div");
  header.className = "category-header p-6";
  header.innerHTML = `
        <h2 class="menu-title text-3xl font-bold text-[#8b4513]">${categoryData.category}</h2>
    `;

  const content = document.createElement("div");
  content.className = "p-6";

  // Add category image only
  const imageSection = document.createElement("div");
  imageSection.className = "flex items-center gap-4 mb-6";
  imageSection.innerHTML = `
        <img src="${categoryData.image}" alt="${categoryData.category}" class="dish-image">
    `;

  // Create menu items list
  const itemsList = document.createElement("ul");
  itemsList.className = "space-y-2";

  categoryData.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "menu-item flex justify-between items-center";
    listItem.innerHTML = `
            <span>${item.name}</span>
            <span class="text-amber-700">
                <s>₹${item.price}</s> <span class="text-green-600 font-bold">₹${item.discountedPrice}</span>
            </span>
        `;
    itemsList.appendChild(listItem);
  });

  content.appendChild(imageSection);
  content.appendChild(itemsList);
  card.appendChild(header);
  card.appendChild(content);

  return card;
}

// Function to initialize the menu
function initializeMenu() {
  const menuContainer = document.querySelector(".menu-container");

  // Updated layout to move Chinese next to combo
  const menuLayout = [
    ["vegPulao", "khichdi"], // First row
    ["combo", "chinese"], // Second row - combo and chinese
    ["biryani", "sweets"], // Third row
  ];

  // Create rows and add menu cards
  menuLayout.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "menu-row flex gap-8 mb-8";

    row.forEach((categoryKey) => {
      const categoryData = menuData[categoryKey];
      const menuCard = createMenuCard(categoryData);
      menuCard.className += row.length === 1 ? " w-full" : " flex-1";
      rowDiv.appendChild(menuCard);
    });

    menuContainer.appendChild(rowDiv);
  });
}

// Initialize menu when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeMenu);
