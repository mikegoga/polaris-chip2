import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://i.imgur.com/WJ9AYho.png";
    this.alt = "This is Eloise";
    this.subtitle = 'About Eloise:';
    this.description = 'This is Eloise, a pure-bred doll faced persian cat with silver shading.';
    this.href = 'https://hax.psu.edu';
    this.buttonText = 'Show Me the Cats!';
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        width: 100%;
        max-width: 400px;
        border: 2px solid black;
        padding: 16px;
        margin: 24px auto;
        background-color: pink;
        display: inline-block;
        box-sizing: border-box;
        transition: transform 120ms ease-in-out;
      }

      :host([active]) .card,
      .card:hover,
      .card:focus-within {
        transform: scale(1.02);
        outline: 2px solid black;
        outline-offset: 3px;
      }

      .card__body {
        padding: 16px;
      }

      .card__title {
        margin: 0 0 0 90px;
      }

      .card-img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        display: block;
        margin: 12px 0px;
        border: 2px solid white;
      }

      .sub-heading {
        margin: 0 0 10px 0;
      }

      .card__desc {
        margin: 0 0 10px 0;
      }

      .btn {
        margin: 0 0 0 115px;
        padding: 10px 10px;
        background: #89eefa;
        color: black;
        border: 2px solid black;
        display: none; 
        cursor: pointer;
      }

      .btn:hover {
        background-color: grey;
      }

      @media (min-width: 500px) and (max-width: 800px) {
        .btn {
          display: inline-block;
        }
      }

      @media (max-width: 499px) {
        .card {
          max-width: 300px;
        }
        .card-img {
          height: 300px;
        }
      }
    `;
  }

  render() {
  return html`
    <div class="card">
      <div class="card__body">
        <h2 class="card__title">${this.title}</h2>

        <img class="card-img" src="${this.image}" alt="${this.alt}" />

        <h4 class="sub-heading">${this.subtitle}</h4>

        <p class="card__desc">${this.description}</p>

        <a href="${this.href}" target="_blank" rel="noopener">
          <button class="btn">${this.buttonText}</button>
        </a>
      </div>
    </div>
  `;
}

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      subtitle: { type: String },
      description: { type: String },
      href: { type: String },
      buttonText: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
