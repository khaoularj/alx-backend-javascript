export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(nvName) {
    if (typeof nvName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nvName;
  }

  get length() {
    return this._length;
  }

  set length(nvLength) {
    if (typeof nvLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = nvLength;
  }

  get students() {
    return this._students;
  }

  set students(nvStudents) {
    this._students = nvStudents;
  }
}
