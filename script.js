// Menu data structure
const menuData = {
  vegPulao: {
    category: "Veg Pulao",
    image: "/images/Food Images/pulao.jpg",
    items: [
      { name: "Veg Pulao", price: "139", discountedPrice: "109" },
      { name: "Masala Pulao", price: "139", discountedPrice: "119" },
      { name: "Soya Pulao", price: "149", discountedPrice: "119" },
      { name: "Aalu Muttor Pulao", price: "149", discountedPrice: "119" },
      { name: "Veg Tava Pulao", price: "159", discountedPrice: "129" },
      { name: "Jain Pulao", price: "159", discountedPrice: "129" },
      { name: "Navratna Pulao", price: "169", discountedPrice: "139" },
      { name: "Shahi Paneer Pulao", price: "169", discountedPrice: "139" },
      { name: "Mushroom Pulao", price: "179", discountedPrice: "149" },
      { name: "Sprout Pulao", price: "179", discountedPrice: "149" },
      { name: "Egg Pulao", price: "179", discountedPrice: "149" },
      { name: "EggKheema Pulao", price: "179", discountedPrice: "149" },
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
  southIndian: {
    category: "South Indian",
    image: "/images/Food Images/Masala-Dosa.jpg",
    items: [
      { name: "Idli (Per Plate)", price: "69", discountedPrice: "39" },
      {
        name: "Masala Dosa ",
        price: "99",
        discountedPrice: "69",
      },
      { name: "Uttapam", price: "99", discountedPrice: "69" },
      { name: "Appe", price: "99", discountedPrice: "69" },
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
      { name: "Egg Biryani", price: "239", discountedPrice: "209" },
      { name: "Veg Handi Biryani", price: "259", discountedPrice: "229" },
    ],
  },

  chinese: {
    category: "Chinese",
    image: "/images/Food Images/chinese.jpg",
    items: [
      { name: "Veg Fried Rice", price: "149", discountedPrice: "119" },
      { name: "Veg Schezwan Rice", price: "159", discountedPrice: "129" },
      { name: "Cocktail Rice", price: "169", discountedPrice: "139" },
    ],
  },
  combo: {
    category: "Combo",
    image: "/images/Food Images/Rajma-Chawal.jpg",
    items: [
      { name: "Masala Rice", price: "139", discountedPrice: "109" },
      { name: "Chole Rice", price: "159", discountedPrice: "129" },
      { name: "Rajma Rice", price: "159", discountedPrice: "129" },
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
        name: "Caramelised Kheer(Per Plate)",
        price: "20",
        discountedPrice: "15",
      },
      { name: "Payasam (Per Plate)", price: "20", discountedPrice: "15" },
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
      <span class="text-amber-700">
        <s class="text-gray-500">₹${item.price}</s> 
        <span class="text-green-600 font-bold ml-2">₹${item.discountedPrice}</span>
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
  menuContainer.className = "menu-container max-w-4xl mx-auto px-4";

  // Create a single column layout
  Object.values(menuData).forEach((categoryData) => {
    const menuCard = createMenuCard(categoryData);
    menuContainer.appendChild(menuCard);
  });
}

// Initialize menu when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeMenu);
