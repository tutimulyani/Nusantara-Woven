// Simpan keranjang belanja sebagai array
let cart = [];

// Fungsi untuk menambah produk ke keranjang
function addToCart(productName, productPrice) {
  // Cari apakah produk sudah ada di keranjang
  const existingProduct = cart.find(item => item.name === productName);

  if (existingProduct) {
    // Jika produk sudah ada, tambahkan jumlahnya
    existingProduct.quantity += 1;
  } else {
    // Jika belum ada, tambahkan produk baru ke keranjang
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  // Tampilkan notifikasi
  showNotification(`${productName} has been added to your cart!`);
  console.log(cart); // Debug: Lihat isi keranjang di console
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.innerText = message;

  document.body.appendChild(notification);

  // Hilangkan notifikasi setelah 3 detik
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Tambahkan event listener pada tombol "Add to Cart"
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buy-button');
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      const card = event.target.closest('.product-card');
      const productName = card.querySelector('.product-name').innerText;
      const productPrice = parseFloat(
        card.querySelector('.product-price').innerText.replace('$', '')
      );

      addToCart(productName, productPrice);
    });
  });
});
