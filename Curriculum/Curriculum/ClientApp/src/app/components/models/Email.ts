interface IEmail {
  from: String;
  subject: String;
  message: String;
}

export class Email implements IEmail {
  from: String;
  subject: String;
  message: String;

  constructor() {
    this.from = "";
    this.message = "";
    this.subject = "";
  }
}
