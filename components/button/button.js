import { html, MyElement, MyRipple } from "../../modules/modules.js";

/**
 *
 */
class MyButtonElement extends MyElement {
    /**
     * @property {Boolean} outlined - Set `outlined` style
     * @property {Boolean} contained - Set `contained` style
     * @property {String} icon - Set `icon` label
     * @property {String} text - Set `text` label
     * @property {String} type - Set `type` behaviour for `button`,`submit`,`reset`
     */
    static get properties() {
        return {
            outlined: { type: Boolean, reflect: true },
            contained: { type: Boolean, reflect: true },
            icon: { type: String },
            text: { type: String },
            type: { type: String },
        };
    }

    constructor() {
        super();
        this.outlined = false;
        this.contained = false;
        this.icon = null;
        this.text = this.textContent;
        this.type = "button"; // submit, reset
    }

    render() {
        return html`
            ${this.icon ? html`<my-icon class="my-button__icon">${this.icon}</my-icon>` : ``}
            ${this.text ? html`<div class="my-button__text">${this.text}</div>` : ``}
            <button .type="${this.type}" class="my-button__native"></button>
        `;
    }

    /**
     *
     */
    get myButtonNative() {
        return this.querySelector(".my-button__native");
        
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    firstUpdated(changedProperties) {
        new MyRipple(this, {
            trigger: this.myButtonNative,
            colored: this.contained,
        });
    }

    updated(changedProperties) {}
}

customElements.define("my-button", MyButtonElement);

export {
    MyButtonElement, //
};
