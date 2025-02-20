// Menu data structure
const menuData = {
  vegPulao: {
    category: "Veg Pulao",
    image: "/images/Food Images/pulao.jpg",
    items: [
      { name: "Veg Pulao", price: "109" },
      { name: "Masala Pulao", price: "119" },
      { name: "Soya Pulao", price: "119" },
      { name: "Aalu Matter Pulao", price: "119" },
      { name: "Veg Tava Pulao", price: "129" },
      { name: "Jain Pulao", price: "129" },
      { name: "Navratna Pulao", price: "149" },
      { name: "Shahi Paneer Pulao", price: "149" },
      { name: "Mushroom Pulao", price: "159" },
      { name: "Sprout Pulao", price: "159" },
      { name: "Egg Pulao", price: "159" },
      { name: "EggKheema Pulao", price: "159" },
    ],
  },
  nonVegPulao: {
    category: "Non-Veg Pulao",
    description: "Flavorful non-vegetarian pulao selections",
    image: "path/to/non-veg-pulao-image.jpg",
    items: [
      { name: "Egg Pulao", price: "0000" },
      { name: "Egg Kheema Pulao", price: "0000" },
      { name: "Chicken Pulao", price: "0000" },
      { name: "Boneless Chicken Pulao", price: "0000" },
      { name: "Mutton Pulao", price: "0000" },
      { name: "Jungli Pulao", price: "0000" },
    ],
  },
  khichdi: {
    category: "Khichdi",
    image: "images/Food Images/Khichdi.jpg",
    items: [
      { name: "Plain Dal Khichadi", price: "89" },
      { name: "Dhaba Style Khichadi", price: "119" },
      { name: "Masala Dal Khichadi", price: "119" },
      { name: "Veg Masala Dal Khichadi", price: "129" },
      { name: "Thecha Khichadi", price: "129" },
      { name: "Bisibele Bhaat", price: "129" },
      { name: "Palak Khichadi", price: "149" },
    ],
  },
  biryani: {
    category: "Biryani",
    image: "/images/Food Images/veg-biryani.jpg",
    items: [
      { name: "Veg Biryani", price: "199" },
      { name: "Paneer Tikka Biryani", price: "249" },
      { name: "Veg Hyderabadi Dum Biryani", price: "249" },
      { name: "Mushroom Biryani", price: "249" },
      { name: "Egg Biryani", price: "249" },
      { name: "Veg Hundi Biryani", price: "299" },
    ],
  },
  combo: {
    category: "Combo",
    image: "/images/Food Images/Rajma-Chawal.jpg",
    items: [
      { name: "Masala Rice", price: "119" },
      { name: "Chole Rice", price: "149" },
      { name: "Rajama Rice", price: "149" },
      { name: "Mushroom Biryani", price: "249" },
    ],
  },
  sweets: {
    category: "Sweets",
    image: "/images/Food Images/ukadiche_modak.jpg",
    items: [
      { name: "Ukdiche Modak (Per Piece)", price: "12" },
      { name: "Kesariya Birang (Per Plate)", price: "20" },
      { name: "Kheer (Per Plate)", price: "20" },
      { name: "Caramelised Kheer (Per Plate)", price: "20" },
      { name: "Payasam (Per Plate)", price: "20" },
    ],
  },
  chinese: {
    category: "Chinese",
    image: "/images/Food Images/chinese.jpg",
    items: [
      { name: "Veg Fried Rice", price: "119" },
      { name: "Veg Schezwan Rice", price: "129" },
      { name: "Cocktail Rice", price: "139" },
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

  // Add category image only (removed description)
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
            <span class="text-amber-700">₹${item.price}</span>
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
      // If it's a combo, make it take full width
      menuCard.className += row.length === 1 ? " w-full" : " flex-1";
      rowDiv.appendChild(menuCard);
    });

    menuContainer.appendChild(rowDiv);
  });
}

// Initialize menu when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeMenu);
