// Menu data structure
const menuData = {
  vegPulao: {
    category: "Veg Pulao",
    image: "/images/Food Images/pulao.jpg",
    items: [
      { name: "Veg Pulao", price: "149", discountedPrice: "119" },
      { name: "Masala Pulao", price: "149", discountedPrice: "119" },
      { name: "Soya Pulao", price: "159", discountedPrice: "129" },
      { name: "Aalu Muttor Pulao", price: "159", discountedPrice: "129" },
      { name: "Muttor Pulao", price: "159", discountedPrice: "129" },
      { name: "Veg Tava Pulao", price: "169", discountedPrice: "139" },
      { name: "Jain Pulao", price: "169", discountedPrice: "139" },
      { name: "Navratna Pulao", price: "179", discountedPrice: "149" },
      { name: "Shahi Paneer Pulao", price: "179", discountedPrice: "149" },
      { name: "Mushroom Pulao", price: "189", discountedPrice: "159" },
      { name: "Sprout Pulao", price: "189", discountedPrice: "159" },
    ],
  },
  khichdi: {
    category: "Khichdi",
    image: "images/Food Images/Khichdi.jpg",
    items: [
      { name: "Plain Dal Khichadi", price: "119", discountedPrice: "99" },
      { name: "Dhaba Style Khichadi", price: "139", discountedPrice: "119" },
      { name: "Masala Dal Khichadi", price: "139", discountedPrice: "119" },
      { name: "Veg Masala Dal Khichadi", price: "149", discountedPrice: "129" },
      { name: "Thecha Khichadi", price: "149", discountedPrice: "129" },
      { name: "Bisibele Bhaat", price: "159", discountedPrice: "139" },
      { name: "Palak Khichadi", price: "159", discountedPrice: "139" },
    ],
  },
  rice: {
    category: "Rice Varieties",
    image: "/images/Food Images/rice-varieties.jpg",
    items: [
      { name: "Lemon Rice", price: "129", discountedPrice: "109" },
      { name: "Curd Rice", price: "129", discountedPrice: "109" },
      { name: "Rasam Rice", price: "129", discountedPrice: "109" },
      { name: "Mint Rice", price: "129", discountedPrice: "109" },
      { name: "Shambar Rice", price: "129", discountedPrice: "109" },
      { name: "Curry Leaf Rice", price: "129", discountedPrice: "109" },
      { name: "Tamarind Rice", price: "139", discountedPrice: "119" },
      { name: "Coconut Rice", price: "149", discountedPrice: "129" },
      { name: "Sesame Rice", price: "159", discountedPrice: "139" },
    ],
  },
  southIndian: {
    category: "South Indian",
    image: "/images/Food Images/Masala-Dosa.jpg",
    items: [
      { name: "Idli (3 Piece)", price: "99", discountedPrice: "79" },
      { name: "Masala Dosa", price: "99", discountedPrice: "79" },
      { name: "Uttapam", price: "99", discountedPrice: "79" },
      { name: "Appe", price: "119", discountedPrice: "99" },
    ],
  },
  biryani: {
    category: "Biryani",
    image: "/images/Food Images/veg-biryani.jpg",
    items: [
      { name: "Veg Biryani", price: "199", discountedPrice: "159" },
      { name: "Paneer Tikka Biryani", price: "239", discountedPrice: "209" },
      {
        name: "Veg Hyderabadi Dum Biryani",
        price: "239",
        discountedPrice: "209",
      },
      { name: "Mushroom Biryani", price: "239", discountedPrice: "209" },
      //{ name: "Egg Biryani", price: "239", discountedPrice: "209" },
      { name: "Veg Handi Biryani", price: "259", discountedPrice: "229" },
    ],
  },

  chinese: {
    category: "Chinese",
    image: "/images/Food Images/chinese.jpg",
    items: [
      { name: "Veg Fried Rice", price: "149", discountedPrice: "129" },
      { name: "Veg Schezwan Rice", price: "159", discountedPrice: "139" },
      { name: "Cocktail Rice", price: "169", discountedPrice: "149" },
    ],
  },
  combo: {
    category: "Combo",
    image: "/images/Food Images/Rajma-Chawal.jpg",
    items: [
      { name: "Masala Rice with Kadi", price: "149", discountedPrice: "129" },
      { name: "Chole Rice", price: "159", discountedPrice: "139" },
      { name: "Rajma Rice", price: "159", discountedPrice: "139" },
    ],
  },
  sweets: {
    category: "Sweets",
    image: "/images/Food Images/ukadiche_modak.jpg",
    items: [
      { name: "Ukdiche Modak", price: "30", discountedPrice: "25" },
      { name: "Kesariya Birang", price: "30", discountedPrice: "25" },
      { name: "Kheer", price: "30", discountedPrice: "25" },
      { name: "Caramelised Kheer", price: "30", discountedPrice: "25" },
      { name: "Payasam", price: "30", discountedPrice: "25" },
    ],
  },
};

// Function to create menu category card
function createMenuCard(categoryData) {
  const card = document.createElement("div");
  card.className =
    "menu-card bg-white rounded-lg overflow-hidden shadow-lg mb-8";

  const header = document.createElement("div");
  header.className =
    "category-header p-4 bg-[#f9f3e8] border-b border-[#8b4513]";
  header.innerHTML = `
    <h2 class="menu-title text-2xl font-bold text-[#8b4513] text-center">${categoryData.category}</h2>
  `;

  const content = document.createElement("div");
  content.className = "p-4";

  // Add category image
  const imageSection = document.createElement("div");
  imageSection.className = "flex justify-center mb-4";
  imageSection.innerHTML = `
    <img src="${categoryData.image}" alt="${categoryData.category}" class="dish-image w-full max-w-md rounded-lg shadow-md">
  `;

  // Create menu items list
  const itemsList = document.createElement("ul");
  itemsList.className = "space-y-3";

  categoryData.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className =
      "menu-item flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 bg-gray-50 rounded-lg";
    listItem.innerHTML = `
      <span class="text-[#8b4513] font-medium mb-1 sm:mb-0">${item.name}</span>
      <span class="text-amber-700 font-bold">₹${item.price}</span>
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
  menuContainer.className = "menu-container max-w-4xl mx-auto px-4";

  // Create a single column layout
  Object.values(menuData).forEach((categoryData) => {
    const menuCard = createMenuCard(categoryData);
    menuContainer.appendChild(menuCard);
  });
}

// Initialize menu when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeMenu);
