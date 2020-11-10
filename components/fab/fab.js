import { html, MyElement, MyRipple } from "../../modules/modules.js";

/**
 *
 */
class MyFabElement extends MyElement {
    /**
     * @property {String} icon - Set `icon` label
     * @property {String} text - Set `text` label
     * @property {Boolean} mini - Set `mini` style
     * @property {Boolean} extended - Set `extended` style
     */
    static get properties() {
        return {
            icon: { type: String },
            text: { type: String },
            mini: { type: Boolean, reflect: true },
            extended: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
        this.icon = null;
        this.text = this.textContent;
        this.mini = false;
        this.extended = false;
    }

    render() {
        return html`
            ${this.icon ? html`<my-icon class="my-fab__icon">${this.icon}</my-icon>` : ``}
            ${this.text ? html`<div class="my-fab__text">${this.text}</div>` : ``}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    firstUpdated(changedProperties) {
        new MyRipple(this, {
            colored: true,
        });
    }

    updated(changedProperties) {}
}

customElements.define("my-fab", MyFabElement);

export {
    MyFabElement, //
};
