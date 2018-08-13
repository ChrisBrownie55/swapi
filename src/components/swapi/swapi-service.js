import Person from '../../models/Person.js';

const people = [];

export default class SwapiService {
  get people() {
    if (people.length > 0) {
      return people;
    }
    return fetch('https://swapi.co/api/people')
      .then(result => result.json())
      .then(json => json.results.map(personData => new Person(personData)))
      .then(data => {
        people.push(...data);
        return data;
      });
  }
}
