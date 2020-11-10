import { html, MyElement, MyRipple } from "../../modules/modules.js";

/**
 *
 */
class MyImageElement extends MyElement {
    /**
     * @property {String} src - Set `src`
     * @property {String} alt - Set `alt`
     * @property {String} ratio - Set `ratio` style
     * @property {Boolean} shape=1-1 - Set `shape` style, `16-9`, `3-2`, `4-3`, `1-1`, `3-4`, `2-3`
     */
    static get properties() {
        return {
            src: { type: String },
            alt: { type: String },
            ratio: { type: String, reflect: true },
            shape: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
        this.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        this.alt = null;
        this.ratio = "1-1";
        this.shape = false;
    }

    render() {
        return html` <img src="${this.src}" alt="${this.alt}" class="my-image__native" /> `;
    }

    // connectedCallback() {
    //     super.connectedCallback();
    // }

    // disconnectedCallback() {
    //     super.disconnectedCallback();
    // }

    // firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("src")) {
            if (!this.alt) {
                this.alt = this.src.split("/").slice(-1)[0].split(".")[0];
            }
        }
    }
}

customElements.define("my-image", MyImageElement);

export {
    MyImageElement, //
};
