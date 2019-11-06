export default class Notification {
  constructor(kind, sender = "") {
    this.kind = kind;
    this.sender = sender;
  }
}