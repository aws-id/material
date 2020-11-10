import { html, MyElement, MyRipple } from "../../modules/modules.js";

/**
 *
 */
class MyIconElement extends MyElement {
    /**
     * @property {Boolean} outlined=true - Set outlined style
     * @property {Boolean} sharp - Set sharp style
     * @property {Boolean} round - Set round style
     * @property {Boolean} twotone - Set twotone style
     * @property {Boolean} interaction - Set interactive element
     */
    static get properties() {
        return {
            outlined: { type: Boolean, reflect: true },
            sharp: { type: Boolean, reflect: true },
            round: { type: Boolean, reflect: true },
            twotone: { type: Boolean, reflect: true },
            interaction: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.outlined = true;
        this.sharp = false;
        this.round = false;
        this.twotone = false;
        this.interaction = false;
    }

    // render() {
    //     return html``;
    // }

    // connectedCallback() {
    //     super.connectedCallback();
    // }

    // disconnectedCallback() {
    //     super.disconnectedCallback();
    // }

    // firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("interaction")) {
            if (this.interaction) {
                new MyRipple(this, {
                    unbounded: true,
                    fadeout: true,
                    size: (100 / 24) * 40,
                });
            }
        }
    }
}

customElements.define("my-icon", MyIconElement);

export {
    MyIconElement, //
};
