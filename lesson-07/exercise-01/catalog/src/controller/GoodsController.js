import goodsView from './../view/goods.handlebars';
import GoodsModel from "../model/goodsModel";

class GoodsController {
  constructor() {
    this.goodsModel = new GoodsModel();
  }

  render() {
    const data = this.goodsModel.getData();

    return goodsView({items: data});
  }
}

export default new GoodsController();
