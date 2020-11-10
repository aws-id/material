import { html, MyElement } from "../../modules/modules.js";

class MyTimePickerElement extends MyElement {
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

customElements.define("my-time-picker", MyTimePickerElement);

export {
    MyTimePickerElement, //
};
