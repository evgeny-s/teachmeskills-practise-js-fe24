import Navigo from 'navigo';

import homeController from './controller/HomeController';
import goodsController from './controller/GoodsController';
import cartController from './controller/CartController';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const router = new Navigo(null, true, '#');

const renderToDom = (html) => {
  document.getElementById('content').innerHTML = html;
};

router
  .on('/', function () {
    renderToDom(homeController.render());

  })
  .on('/goods', function () {
    renderToDom(goodsController.render());
  })
  .on('/cart', function () {
    renderToDom(cartController.render());
  })
  .resolve();
