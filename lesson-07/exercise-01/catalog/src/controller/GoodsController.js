import goodsView from './../view/goods.handlebars';

class GoodsController {
  render() {
    return goodsView();
  }
}

export default new GoodsController();
