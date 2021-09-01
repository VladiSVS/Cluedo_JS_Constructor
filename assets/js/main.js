
class Card {
    constructor(image, firstName, lastName, age, description, color) {
        this.image = image
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.description = description
        this.color = color
    }
    getCard() {
        document.getElementById("personCard").innerHTML =
            `${this.image}
             <h2>${this.firstName} ${this.lastName} (${this.age})</h2>
             <p>${this.description}</p>`
        document.getElementById("personName").innerHTML = `${this.firstName} ${this.lastName}`
        document.getElementById("personName").style.color = `${this.color}`
    }
}

let mrGreen = new Card('<img src="assets/img/65jTv2uC.jpeg" alt="">', "Jacob", "Green", 45, "He has a lot of connections", "green")
let drOrchid = new Card('<img src="assets/img/111967.jpeg" alt="">', "Doctor", "Orchid", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy", "white")
let profPlum = new Card('<img src="assets/img/tumblr_phhxc7EhPJ1w5fh03_540.jpeg" alt="">', "Victor", "Plum", 22, "Billionaire video game designer", "purple")
let missScarlet = new Card('<img src="assets/img/cluedo-miss-scarlett.jpeg" alt="">', "Kasandra", "Scarlet", 31, "She is an A-list movie star with a dark past", "red")
let mrsPeacock = new Card('<img src="assets/img/peacock.jpeg" alt="">', "Eleanor", "Peacock", 36, "She is from a wealthy family and uses her status and money to earn popularity", "blue")
let mrMustard = new Card('<img src="assets/img/unspecified-3.jpeg" alt="">', "Jack", "Mustard", 62, "He is a former football player who tries to get by on his former glory", "yellow")

let personArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard]
randomCard = () => {
    let randomNum = Math.floor(Math.random() * personArray.length)
    let result = personArray[randomNum]

    return result
}

class Weapons {
    constructor(weapon, weight) {
        this.weapon = weapon
        this.weight = weight
    }
    getWeapons() {
        document.getElementById("getWeapons").innerHTML =
            `<h2>${this.weapon}</h2>
             <p>Weight: ${this.weight}</p>`
    }
}

let rope = new Weapons("rope", 10)
let knife = new Weapons("knife", 8)
let candlestick = new Weapons("candlestick", 2)
let dumbbell = new Weapons("dumbbell", 30)
let poison = new Weapons("poison", 2)
let axe = new Weapons("axe", 15)
let bat = new Weapons("bat", 13)
let trophy = new Weapons("trophy", 25)
let pistol = new Weapons("pistol", 20)

console.log("----------------------------------------------------------------")

let weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol]
randomWeapons = () => {
    let randomNum = Math.floor(Math.random() * weaponsArray.length)
    let result = weaponsArray[randomNum]

    return result
}

class Rooms {
    constructor(room) {
        this.room = room
    }
    getRooms() {
        document.getElementById("getRooms").innerHTML =
            `<h2>${this.room}</h2>`
    }
}

let diningRoom = new Rooms("Dining Room")
let conservatory = new Rooms("Conservatory")
let kitchen = new Rooms("Kitchen")
let study = new Rooms("Study")
let library = new Rooms("Library")
let billiard = new Rooms("Billiard")
let lounge = new Rooms("Lounge")
let ballroom = new Rooms("Ballroom")
let hall = new Rooms("Hall")
let spa = new Rooms("Spa")
let livingRoom = new Rooms("Living Room")
let observatory = new Rooms("Observatory")
let theater = new Rooms("Theater")
let guestHous = new Rooms("Guest House")
let patio = new Rooms("Patio")

let roomsArray = [diningRoom, conservatory, kitchen, study, library, billiard, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHous, patio]
randomRooms = () => {
    let randomNum = Math.floor(Math.random() * roomsArray.length)
    let result = roomsArray[randomNum]

    return result
}

function start() {

    randomCard()
    let randomPerson = randomCard()
    console.log(randomPerson)
    randomPerson.getCard()

    randomWeapons()
    let randomWeapon = randomWeapons()
    console.log(randomWeapon)
    randomWeapon.getWeapons()

    randomRooms()
    let randomRoom = randomRooms()
    console.log(randomRoom)
    randomRoom.getRooms()
}

