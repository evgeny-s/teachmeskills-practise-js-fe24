import homeView from './../view/home.handlebars';
import HomeModel from './../model/homeModel';

class HomeController {
  constructor() {
    this.homeModel = new HomeModel();
  }

  render() {
    const data = this.homeModel.getData();

    return homeView(data);
  }
}

export default new HomeController();
