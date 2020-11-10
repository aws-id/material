import { html, LitElement } from "../lit-element/lit-element.js";

/**
 *
 */
class MyElement extends LitElement {
    // static get properties() {
    //     return {};
    // }

    // constructor() {
    //     super();
    // }

    // render() {
    //     return html``;
    // }

    createRenderRoot() {
        return this;
    }

    // connectedCallback() {
    //     super.connectedCallback();
    // }

    // disconnectedCallback() {
    //     super.disconnectedCallback();
    // }

    // firstUpdated(changedProperties) {}

    // updated(changedProperties) {}

    /**
     * CustomEvent
     * @param {String} type -
     * @param {Object} detail -
     */
    emit(type = "", detail = {}) {
        let event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.dispatchEvent(event);
    }

    /**
     * addEventListener
     * @param {String} type -
     * @param {Function} callback -
     */
    on(type = "", callback = (event) => event) {
        this.addEventListener(type, callback);
    }

    /**
     * removeEventListener
     * @param {String} type -
     * @param {Function} callback -
     */
    removeListener(type = "", callback = (event) => event) {
        this.removeEventListener(type, callback);
    }
}

export {
    html, //
    MyElement, //
};
