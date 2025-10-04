const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart-button');

    const openModal = () => {
        modal.classList.add('open');
    };

    const closeModal = () => {
        modal.classList.remove('open');
    };

    cartBtn.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }
    });
}

const restsFunc = () => {
    const container = document.querySelector('#rests-container');

    const restArray = [
        { id: 0, title: 'Пицца плюс', time: 50, rating: 4.5, price: 900, type: 'Пицца', img: 'rests-1.jpg' },
        { id: 1, title: 'Тануки', time: 45, rating: 4.7, price: 900, type: 'Пицца', img: 'rests-2.jpg' },
        { id: 2, title: 'FoodBand', time: 40, rating: 4.3, price: 900, type: 'Пицца', img: 'rests-3.jpg' },
        { id: 3, title: 'Жадина-пицца', time: 40, rating: 4.3, price: 900, type: 'Пицца', img: 'rests-4.jpg' },
        { id: 4, title: 'Точка еды', time: 40, rating: 4.3, price: 900, type: 'Пицца', img: 'rests-5.jpg' },
        { id: 5, title: 'PizzaBurger', time: 40, rating: 4.3, price: 900, type: 'Пицца', img: 'rests-6.jpg' },
    ]

    const renderRests = (array) => {
        container.innerHTML = '';

        array.forEach(card => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__image">
                                <img src="./images/rests/${card.img}" alt="${card.img}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h4 class="products-card__description--title">${card.title}</h4>
                                    <div class="products-card__description--bage">${card.time} мин</div>
                                </div>
                                <div class="products-card__description-row">
                                    <div class="products-card__description-info">
                                        <div class="products-card__description--rating">
                                            <img src="./images/icons/star.svg" alt="star">
                                            ${card.rating}
                                        </div>
                                        <div class="products-card__description--price">
                                            От ${card.price} ₽
                                        </div>
                                        <div class="products-card__description--group">
                                            ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                `)
        })
    }

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
    }

    if (container) {
        loading();
        setTimeout(() => {
            renderRests(restArray);
        }, 1100)
    }
}

const goodsFunc = () => {
    const container = document.querySelector('#goods-container');

    const goodsArray = [
        { id: 0, title: 'Ролл угорь стандарт', price: 250, desc: 'Рис, угорь, соус унаги, кунжут, водоросли нори.', img: 'goods-1.jpg' },
        { id: 1, title: 'Калифорния лосось стандарт', price: 395, desc: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.', img: 'goods-2.jpg' },
        { id: 2, title: 'Окинава стандарт', price: 250, desc: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...', img: 'goods-3.jpg' },
        { id: 3, title: 'Цезарь маки хl', price: 250, desc: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...', img: 'goods-4.jpg' },
        { id: 4, title: 'Ясай маки стандарт 185 г', price: 250, desc: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг', img: 'goods-5.jpg' },
        { id: 5, title: 'Ролл с креветкой стандарт', price: 250, desc: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы', img: 'goods-6.jpg' },
    ]

    const renderGoods = (array) => {
        container.innerHTML = '';

        array.forEach(card => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                            <div class="products-card__image">
                                <img src="./images/goods/${card.img}" alt=${card.img}>
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h4 class="products-card__description--name">${card.title}</h4>
                                </div>
                                <div class="products-card__description-row">
                                    <p class="products-card__description--text">${card.desc}</p>
                                </div>
                                <div class="products-card__description-row">
                                    <div class="products-card__description-controls">
                                        <button class="btn btn-primary">
                                            В корзину
                                            <img src="./images/icons/basket.svg" alt="basket">
                                        </button>
                                        <span class="products-card__description-controls--price">${card.price} ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
        })
    }

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
    }

    if (container) {
        loading();
        setTimeout(() => {
            renderGoods(goodsArray);
        }, 1100)
    }
}

restsFunc();
goodsFunc();
modalFunc();