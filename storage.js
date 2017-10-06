// inventory object items
const mazda = {
    "name": "Mazda 3",
    "type": "vehicle",
    "location": "Writing desk",
    "description": "2015 Red Mazda 3 with 35000 miles on it"
}
  
const volkswagen = {
  "name": "Tiguan",
  "type": "vehicle",
  "location": "Garage",
  "description": "2012 Champagne Metallic Volkswagen Tiguan with 90000 miles on it"
}

const sadie = {
  "name": "Sadie",
  "type": "pet",
  "location": "House",
  "description": "55lbs bundle of drool and love"
  }

const gamingRig = {
  "name": "Gaming Rig",
  "type": "electronics",
  "location": "Office",
  "description": "Cerberus Gaming Rig"
}

const projector = {
  "name": "Projector",
  "type": "electronics",
  "location": "Bonus Room",
  "description": "Optoma HD33 1080p 3D Projector"
}

const rokuFour = {
  "name": "Roku Four",
  "type": "electronics",
  "location": "Living Room",
  "description": "Roku 4 Premier"
}

const purpleRug = {
  "name": "Purple Rug",
  "type": "furniture",
  "location": "Living Room",
  "description": "Purple rug that chad hates"
}

const cherryWoodTable = {
  "name": "Cherry Wood Table",
  "type": "Furniture",
  "location": "Dining Room",
  "description": "Cherry Wood Dining Room Table"
}

const peavyAmp = {
  "name": "Peavy Speaker Cabinet",
  "type": "music equipment",
  "location": "Bonus Room",
  "description": "Vintage 1973 Peavey Bass Amp 4X10"
}

const acousticGuitar = {
  "name": "Acoustic Guitar",
  "type": "music equipment",
  "location": "Bonus Room",
  "description": "Taylor GS Mini"
}

  // type arrays
let vehicle = []
let electronics = []
let pet = []
let furniture = []
let musicEquipment = []

vehicle.push(mazda)
vehicle.push(volkswagen)
pet.push(sadie)
electronics.push(gamingRig)
electronics.push(projector)
electronics.push(rokuFour)
furniture.push(purpleRug)
furniture.push(cherryWoodTable)
musicEquipment.push(peavyAmp)
musicEquipment.push(acousticGuitar)

// creating home inventory
let homeInventory = {
  "furniture": furniture,
  "vehicle": vehicle,
  "pet": pet,
  "electronics": electronics,
  "musicEquipment": musicEquipment
}

// place homeInventory into local storage
const homeInventoryString = JSON.stringify(homeInventory)
localStorage.setItem("homeInventory", homeInventoryString)

