export default class Person {
  constructor(requestData) {
    this.name = requestData.name;
    this.height = requestData.height;
    this.mass = requestData.mass;
    this.hairColor = requestData.hair_color;
    this.skinColor = requestData.skin_color;
    this.eyeColor = requestData.eye_color;
    this.creationDate = requestData.birth_year;
    this.gender = requestData.gender;
    this.homeworld = requestData.homeworld;
    this.films = requestData.films;
    this.species = requestData.species;
    this.vehicles = requestData.vehicles;
    this.starships = requestData.starships;
    this.url = requestData.url;
  }
}
