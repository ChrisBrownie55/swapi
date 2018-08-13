import SwapiService from './swapi-service.js';

const swapiService = new SwapiService();

const app = document.getElementById('app');
function draw() {
  swapiService.people.then(people => {
    app.innerHTML = people.map(person => `${person.name}`).join('<br />');
  });
}

export default class SwapiController {
  constructor() {
    draw();
  }
}
