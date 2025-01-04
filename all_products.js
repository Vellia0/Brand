fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const productsContainer = document.getElementById('products_dev');

    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
      <div class="product_card">
        <img src="${product.img}" alt="${product.name}" class="product_image">
        <h3 class="product_name">${product.name}</h3>
        <p class="product_price">السعر: ${product.price} د.أ</p>
        <p class="product_category">الفئة: ${product.catetory}</p>
        ${product.link ? `<a href="${product.link}" class="product_link">عرض المنتج</a>` : ""}
      </div>
    `).join('');
  })
  .catch(error => console.error('Error loading products:', error));
