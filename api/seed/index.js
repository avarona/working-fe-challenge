const fs = require("fs");

async function createProducts() {
  const products = new Array(1000).fill(null).map((_item, i) => {
    // set first product price/inventory for easy testing
    const price = Math.floor(Math.random() * (100 + 1));
    const inventory = i === 0 ? 10 : Math.floor(Math.random() * (50 + 1));

    return {
      id: i + 1,
      name: `Product ${i + 1}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://images.unsplash.com/photo-1584942368913-b98dd9983c7e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400",
      inventory,
      price,
    };
  });

  fs.writeFileSync("./seed/products.json", JSON.stringify(products));
}

module.exports = createProducts();
