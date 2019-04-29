export class Card {
  name: string;
  description: string;
  logo: string;
  logoAlt: string;

  constructor(name: string, description: string, logo: string, logoAlt: string) {
    this.name = name;
    this.description = description;
    this.logo = logo;
    this.logoAlt = logoAlt;
  }
}
