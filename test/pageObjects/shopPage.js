class ShopPage {

    get checkout() {return $('*=Checkout')}
    get cards() {return  $$('div[class="card h-100"]')}

    addProductToCart(products) {
         this.cards.filter(el => products.includes(el.$('div h4 a').getText()))
            .map(el => el.$('.card-footer button').click())
    }
}

module.exports = new ShopPage()