import { html, MyElement } from "../../modules/modules.js";

class MyBottomSheetElement extends MyElement {
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

customElements.define("my-bottom-sheet", MyBottomSheetElement);

export {
    MyBottomSheetElement, //
};
