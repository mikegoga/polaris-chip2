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
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        vertical-align: top;
      }

      :host([fancy]) .card{
        border: 2px solid black;
        box-shadow: 10px 5px 5px black;
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
        transition: transform 600ms ease-in-out;
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

      .desc-area {
        height: 90px;             
        margin-bottom: 5px;
      }

      .desc-area details {
        height: 100%;
      }

      .desc-area summary {
        cursor: pointer;
        user-select: none;
        margin: 0;
      }

      .desc-area details:not([open]) .details-scroll {
        visibility: hidden;
      }

      .btn {
        padding: 10px 10px;
        background: #89eefa;
        color: black;
        border: 2px solid black;
        cursor: pointer;
      }

      .btn:hover {
        background-color: grey;
      } 

      .details {
        margin-top: 8px;
      } 

      .details-scroll {
       line-height: 1.4em;          
       max-height: 2.4em;         
       overflow-y: auto;           
       overflow-x: hidden;
       padding-right: 6px;
       box-sizing: border-box;
      }
      
      .details-scroll ::slotted(*) {
        margin: 0;
      }

    `;
  }

  render() {
  return html`
    <div class="card">
      <div class="card__body" style="background-color: ${this.backgroundcolor}">
        <h2 class="card__title">${this.title}</h2>
        <img class="card-img" src="${this.image}" alt="${this.alt}" />
        <h4 class="sub-heading">${this.subtitle}</h4>
        <div class="desc-area">
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>

            <div class="details-scroll">
              <slot>${this.description}</slot>
            </div>
          </details>
        </div>
        <a href="${this.href}" class="btn" target="_blank" rel="noopener">
          ${this.buttonText}
        </a>
      </div>
    </div>
  `;
}

// put this anywhere on the MyCard class; just above render() is probably good
openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
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
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
