import cartView from './../view/cart.handlebars';

class CartController {
  render() {
    return cartView();
  }
}

export default new CartController();
