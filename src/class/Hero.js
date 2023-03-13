class Hero {
  constructor() {
    this._range = 1
    this._attack = 100
    this._stoned = false
  }

  get attack() {
    return this._attack
  }

  set attack(attack) {
    this._attack = this.getAttack(attack, null)
  }

  get range() {
    return this._range
  }

  set range(range) {
    this._range = range
    this.getAttack(null, this._range)
  }

  get stoned() {
    return this._stoned
  }

  set stoned(v) {
    this._stoned = !!v
  }

  getAttack(attack, range) {
    let value
    if (attack) {
      value = Math.round(this._range === 1 ? attack : attack * ((100 - ((this._range - 1) * 10)) / 100))
      return this._stoned ? value - this.log(2, this._range) * 5 : value
    }
    value = Math.round(this._attack * ((100 - ((range - 1) * 10)) / 100))
    this._attack =  this._stoned ? value - this.log(2, this._range) * 5 : value
  }

  log(x, y) {
    return  Math.round(Math.log(y) / Math.log(x));
  }
}

export default Hero