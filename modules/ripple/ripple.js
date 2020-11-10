/**
 *
 */
class MyRipple {
    /**
     *
     * @param {HTMLElement} element - Set `HTMLElement` for `element`
     * @param {Object} options -
     * @property {HTMLElement} options.trigger - Set `HTMLElement` for `trigger`
     * @property {Boolean} options.colored - Set `colored` style
     * @property {Boolean} options.unbounded - Set `unbounded` style
     * @property {Boolean} options.fadeout - Set `fadeout` style
     * @property {Number} options.size - Set `size`
     */
    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign(
            this,
            {
                trigger: element,
                colored: false,
                unbounded: false,
                fadeout: false,
                size: undefined,
            },
            options
        );

        this.handlePointerenter = this.handlePointerenter.bind(this);
        this.handlePointerleave = this.handlePointerleave.bind(this);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.handlefocus = this.handlefocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        if (!this.element.classList.contains("my-ripple")) {
            this.init();
        }
    }

    /**
     *
     */
    set colored(value) {
        if (value) {
            this.element.classList.add("my-ripple--colored");
        } else {
            this.element.classList.remove("my-ripple--colored");
        }
    }

    /**
     *
     */
    set unbounded(value) {
        if (value) {
            this.element.classList.add("my-ripple--unbounded");
        } else {
            this.element.classList.remove("my-ripple--unbounded");
        }
    }

    /**
     *
     */
    set fadeout(value) {
        if (value) {
            this.element.classList.add("my-ripple--fadeout");
        } else {
            this.element.classList.remove("my-ripple--fadeout");
        }
    }

    /**
     *
     */
    get size() {
        return this.size_;
    }

    /**
     *
     */
    set size(value) {
        let width = this.rect.width;
        let height = this.rect.height;

        this.size_ = value || (Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / Math.max(width, height)) * 100;

        if (value !== false) {
            this.element.style.setProperty("--my-ripple-size", `${this.size_}%`);
        } else {
            this.element.style.removeProperty("--my-ripple-size");
        }
    }

    /**
     *
     */
    get rect() {
        return this.element.getBoundingClientRect();
    }

    handlePointerenter(event) {
        this.element.classList.add("my-ripple--hovered");
    }

    handlePointerleave(event) {
        this.element.classList.remove("my-ripple--hovered");
    }

    handlePointerdown(event) {
        this.element.classList.add("my-ripple--pressed");

        this.element.style.setProperty("--my-ripple", "none");
        this.element.style.setProperty("--my-ripple-fadeout", "none");

        let rect = this.rect;
        let { clientX, clientY } = event;
        let size = (this.size / 100) * Math.max(rect.width, rect.height);
        let left = (clientX - rect.left) / rect.width;
        let top = (clientY - rect.top) / rect.height;
        let x = (0.5 - left) * (rect.width / size);
        let y = (0.5 - top) * ((rect.width / size) * (rect.height / rect.width));

        this.element.style.setProperty("--my-ripple-left", `${left * 100}%`);
        this.element.style.setProperty("--my-ripple-top", `${top * 100}%`);
        this.element.style.setProperty("--my-ripple-x", `${x * 100}%`);
        this.element.style.setProperty("--my-ripple-y", `${y * 100}%`);

        this.element.style.removeProperty("--my-ripple");
        this.element.style.removeProperty("--my-ripple-fadeout");

        document.addEventListener("pointerup", this.handlePointerup);
        document.addEventListener("touchend", this.handlePointerup);
    }

    handlePointerup(event) {
        this.element.classList.remove("my-ripple--pressed");

        document.removeEventListener("pointerup", this.handlePointerup);
        document.removeEventListener("touchend", this.handlePointerup);
    }

    handlefocus(event) {
        this.element.classList.add("my-ripple--focused");
    }

    handleBlur(event) {
        this.element.classList.remove("my-ripple--focused");
    }

    /**
     *
     */
    init() {
        this.element.classList.add("my-ripple");

        this.options.trigger.classList.add("my-ripple--trigger");

        this.options.trigger.setAttribute("tabIndex", 0);

        this.options.trigger.addEventListener("pointerenter", this.handlePointerenter);
        this.options.trigger.addEventListener("pointerleave", this.handlePointerleave);
        this.options.trigger.addEventListener("pointerdown", this.handlePointerdown);
        this.options.trigger.addEventListener("focus", this.handlefocus);
        this.options.trigger.addEventListener("blur", this.handleBlur);
    }

    /**
     *
     */
    destroy() {
        this.element.classList.remove("my-ripple");

        this.options.trigger.classList.remove("my-ripple--trigger");

        this.options.trigger.removeAttribute("tabIndex");

        this.options.trigger.removeEventListener("pointerenter", this.handlePointerenter);
        this.options.trigger.removeEventListener("pointerleave", this.handlePointerleave);
        this.options.trigger.removeEventListener("pointerdown", this.handlePointerdown);
        this.options.trigger.removeEventListener("focus", this.handlefocus);
        this.options.trigger.removeEventListener("blur", this.handleBlur);
    }
}

export {
    MyRipple, //
};
