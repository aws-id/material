import { html, MyElement, MyRipple } from "../../modules/modules.js";

/**
 *
 */
class MyChipElement extends MyElement {
    /**
     * @property {String} src - Set `src` label
     * @property {String} icon - Set `icon` label
     * @property {String} text - Set `text` label
     * @property {String} action - Set `action` label
     * @property {Boolean} outlined - Set `outlined` style
     */
    static get properties() {
        return {
            src: { type: String },
            icon: { type: String },
            text: { type: String },
            action: { type: String },
            outlined: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
        this.src = null;
        this.icon = null;
        this.text = this.textContent;
        this.action = null;
        this.outlined = false;
    }

    render() {
        return html`
            ${this.src ? html`<my-image class="my-chip__image" src="${this.src}" shape></my-image>` : ``}
            ${this.icon ? html`<my-icon class="my-chip__icon">${this.icon}</my-icon>` : ``}
            ${this.text ? html`<div class="my-chip__text">${this.text}</div>` : ``}
            ${this.action ? html`<my-icon @click="${this.handleActionClick}" class="my-chip__action">${this.action}</my-icon>` : ``}
        `;
    }

    /**
     *
     * @emits onActionClick
     */
    handleActionClick(event) {
        let { currentTarget } = event;
        currentTarget.emit("onActionClick", { event });
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    firstUpdated(changedProperties) {
        new MyRipple(this, {});
    }

    updated(changedProperties) {}
}

customElements.define("my-chip", MyChipElement);

export {
    MyChipElement, //
};

/**
 *
 */
class MyChipGroupElement extends MyElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    // render() {
    //     return html``;
    // }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}
}

customElements.define("my-chip-group", MyChipGroupElement);

export {
    MyChipGroupElement, //
};
