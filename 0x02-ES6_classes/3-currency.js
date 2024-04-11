export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(nvCode) {
    this._code = nvCode;
  }

  get name() {
    return this._name;
  }

  set name(nvName) {
    this._name = nvName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
