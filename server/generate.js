var faker = require('faker');

var database = { characters: [] };

for (var i = 1; i <= 50; i++){
  database.characters.push({
    id: i,
    name: faker.name,
    status: faker.status,
    species: faker.species,
    gender: faker.gender,
    origin: faker.origin,
    location: faker.location,
    image: faker.image
  });
}

console.log(JSON.stringify(database));
