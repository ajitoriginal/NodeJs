class SuperHero {
    constructor(name) {
        this.name = name
    }

    getName () {
        return this.name
    }

    setName (newName) {
        this.name = newName
        return newName
    }
}

// module.exports = new SuperHero('Batman')
module.exports = SuperHero