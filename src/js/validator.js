class Validator {
  constructor() {
    this.regExp = /(^[a-z])(\w|-)+([a-z]$)/gi;
    this.wrongSymbols = /^[\d-_]|\d{4}|[\d-_]$/g;
  }

  validateUsername(username) {
    if (username.match(this.regExp) === null) {
      return false;
    }

    if (username.match(this.wrongSymbols) !== null) {
      return false;
    }

    return true;
  }
}

export default Validator;
