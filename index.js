document.addEventListener("DOMContentLoaded", () => {


    const shoppingCartButton = document.getElementById('shopping-cart');
    const shoppingCart = document.querySelector('.shopping-cart');

    if (shoppingCartButton) {
        shoppingCartButton.addEventListener('click', () => {
            shoppingCart.classList.toggle('active');
        });
    }

    document.addEventListener('click', function(e){
        if(!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
            shoppingCart.classList.remove('active');
        }
    })



    const hamburgerMenu = document.getElementById('humberger-menu');
    const navbarItems = document.querySelector('.navbar ul');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navbarItems.classList.toggle('active');
        });
    }


    document.addEventListener('click', function(e){
        if(!hamburgerMenu.contains(e.target) && !navbarItems.contains(e.target)) {
            navbarItems.classList.remove('active');
        }
    })
      

    const searchIcon = document.querySelector('.navbar-cart i');
    const searchForm = document.querySelector('.navbar-cart .search-form');

    if (searchIcon && searchForm) {
        searchIcon.addEventListener('click', () => {
            searchForm.classList.toggle('active');
        });

        document.querySelector('.search').style.display = 'none';
    }


    const btn = document.getElementById('.product-description')
    
    const modal = document.getElementById(".item-detail-modal");


const closeBtn = document.querySelector(".close");


btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

    


    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your purchase!');
        });
    });


    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.2s ease-in-out';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        } else {
            navbar.style.background = '#333';
        }
    });
 });
