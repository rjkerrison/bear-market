const Bear = require('../models/Bear.model.js')
const connection = require('../db/index.js')
const { default: mongoose } = require('mongoose')

// SEED the database
// adding initial data from an external source (or handcoded)

const bears = [
  { name: 'Winnie', species: 'Pooh', favouriteFood: 'honey' },
  { name: 'Rupert', species: 'Scarf', favouriteFood: 'unknown' },
  { name: 'Paddington', species: 'Peruvian', favouriteFood: 'marmalade' },
]

async function seedBears() {
  await connection
  const createdBears = await Bear.create(bears)
  console.log(`Created ${createdBears.length} bears.`)
  await mongoose.connection.close()
  console.log('Connection closed.')
}

seedBears()
