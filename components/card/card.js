import { html, MyElement } from "../../modules/modules.js";

class MyCardElement extends MyElement {
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

customElements.define("my-card", MyCardElement);

export {
    MyCardElement, //
};
