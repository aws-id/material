﻿import { html, MyElement } from "../../modules/modules.js";

class MyBottomNavigationElement extends MyElement {
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

customElements.define("my-bottom-navigation", MyBottomNavigationElement);

export {
    MyBottomNavigationElement, //
};
