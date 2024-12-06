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

