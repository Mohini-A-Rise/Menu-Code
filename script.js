// Menu data structure
const menuData = {
  vegPulao: {
    category: "Veg Pulao",
    description: "Traditional vegetarian pulao preparations",
    image: "path/to/veg-pulao-image.jpg",
    items: [
      { name: "Veg Pulao", price: "0000" },
      { name: "Masala Pulao", price: "0000" },
      { name: "Veg Tava Pulao", price: "0000" },
      { name: "Navratna Pulao", price: "0000" },
      { name: "Soya Pulao", price: "0000" },
      { name: "Shahi Paneer Pulao", price: "0000" },
      { name: "Aalu Matter Pulao", price: "0000" },
      { name: "Mushroom Pulao", price: "0000" },
      { name: "Sprout Pulao", price: "0000" },
      { name: "Jain Pulao", price: "0000" },
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
    description: "Comforting khichdi varieties",
    image: "path/to/khichdi-image.jpg",
    items: [
      { name: "Plain Dal Khichadi", price: "0000" },
      { name: "Veg Masala Dal Khichadi", price: "0000" },
      { name: "Masala Dal Khichadi", price: "0000" },
      { name: "Bisibele Bhaat", price: "0000" },
      { name: "Palak Khichadi", price: "0000" },
      { name: "Thecha Khichadi", price: "0000" },
      { name: "Dhaba Style Khichadi", price: "0000" },
    ],
  },
  vegBiryani: {
    category: "Veg Biryani",
    description: "Aromatic vegetarian biryani specialties",
    image: "path/to/veg-biryani-image.jpg",
    items: [
      { name: "Veg Biryani", price: "0000" },
      { name: "Paneer Tikka Biryani", price: "0000" },
      { name: "Veg Hyderabadi Biryani", price: "0000" },
      { name: "Mushroom Biryani", price: "0000" },
      { name: "Kabuli Soya Chaap Biryani", price: "0000" },
    ],
  },
  nonVegBiryani: {
    category: "Non-Veg Biryani",
    description: "Signature non-vegetarian biryani dishes",
    image: "path/to/non-veg-biryani-image.jpg",
    items: [
      { name: "Chicken Biryani", price: "0000" },
      { name: "Mutton Biryani", price: "0000" },
      { name: "Kheema Biryani", price: "0000" },
      { name: "Hyderabadi Chicken Biryani", price: "0000" },
      { name: "Chicken Dum Biryani", price: "0000" },
      { name: "Mutton Dum Biryani", price: "0000" },
      { name: "Kheema Dum Biryani", price: "0000" },
      { name: "Hyderabadi Mutton Dum Biryani", price: "0000" },
    ],
  },
  sweets: {
    category: "Sweets",
    description: "Delectable dessert selection",
    image: "path/to/sweets-image.jpg",
    items: [
      { name: "Kesariya Birang", price: "0000" },
      { name: "Kheer", price: "0000" },
      { name: "Caramelised Kheer", price: "0000" },
      { name: "Ukdiche Modak", price: "0000" },
      { name: "Payasam", price: "0000" },
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

  // Add category image and description
  const imageSection = document.createElement("div");
  imageSection.className = "flex items-center gap-4 mb-6";
  imageSection.innerHTML = `
        <img src="${categoryData.image}" alt="${categoryData.category}" class="dish-image">
        <p class="text-[#8b4513] italic">${categoryData.description}</p>
    `;

  // Create menu items list
  const itemsList = document.createElement("ul");
  itemsList.className = "space-y-2";

  categoryData.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "menu-item flex justify-between items-center";
    listItem.innerHTML = `
            <span>${item.name}</span>
            <span class="text-amber-700">${item.price}Rs</span>
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

  // Define the order and pairing of categories
  const menuLayout = [
    ["vegPulao", "nonVegBiryani"], // First row
    ["khichdi", "vegBiryani"], // Second row
    ["nonVegPulao", "sweets"], // Third row
  ];

  // Create rows and add menu cards in pairs
  menuLayout.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "menu-row flex gap-8 mb-8"; // Add flex and gap for side by side layout

    row.forEach((categoryKey) => {
      const categoryData = menuData[categoryKey];
      const menuCard = createMenuCard(categoryData);
      menuCard.className += " flex-1"; // Make each card take equal width
      rowDiv.appendChild(menuCard);
    });

    menuContainer.appendChild(rowDiv);
  });
}

// Initialize menu when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeMenu);
