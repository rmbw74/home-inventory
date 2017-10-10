const inventoryUpdate = localStorage.getItem("homeInventory")
let NewHomeInventory = JSON.parse(inventoryUpdate)



// new objects to be added into inventory
const tesla = {
    "name": "Tesla Model 3",
    "type": "vehicle",
    "location": "garage",
    "description": "brand new electric vehicle"
}
const spot = {
    "name": "spot",
    "type": "pet",
    "location": "house",
    "description": "new dog"
}
const appleTv = {
    "name": "Apple TV",
    "type": "electronics",
    "location": "living room",
    "description": "brand new apple tv"
}
const standingDesk = {
    "name": "Standing Desk",
    "type": "furniture",
    "location": "office",
    "description": "new furniture"
}
const marshallAmp = {
    "name": "Marshall Amplifier",
    "type": "musicEquipment",
    "location": "Bonus Room",
    "description": "new amplifier"
}




// push new inventory into homeInventory Object
NewHomeInventory.vehicle.push(tesla)
NewHomeInventory.pet.push(spot)
NewHomeInventory.furniture.push(standingDesk)
NewHomeInventory.musicEquipment.push(marshallAmp)

// place new home inventory into storage
const newhomeInventoryString = JSON.stringify(NewHomeInventory)
localStorage.setItem("homeInventory", newhomeInventoryString)




