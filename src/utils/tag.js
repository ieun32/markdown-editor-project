export default class Tag {
  static get(classname) {
    return document.querySelector(classname);
  }
}
