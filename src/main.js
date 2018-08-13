import SwapiController from './components/swapi/swapi-controller.js';

class App {
  constructor() {
    this.controllers = {
      swapi: new SwapiController()
    };
  }
}

const app = new App();
window.app = app;
