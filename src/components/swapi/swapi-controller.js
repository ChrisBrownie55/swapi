import SwapiService from './swapi-service.js';

const swapiService = new SwapiService();

const app = document.getElementById('app');
async function draw() {
  const people = await swapiService.people;
  app.innerHTML = people.map(person => `${person.name}`).join('<br />');
}

export default class SwapiController {
  constructor() {
    draw();
  }
}
