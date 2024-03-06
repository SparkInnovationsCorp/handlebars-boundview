class HandlebarsBoundView {
    constructor(target = "#app", template = null) {
        this.target = target;
        this.templatePath = template
            ? template
            : this.constructor.name + ".html";
        this.template = null; // Placeholder for the compiled template
        this.register();
    }

    register() {
        this.onclickHandles = [];
        this.bindHandles = [];
        const base = this;

        Handlebars.registerHelper("eq", function (arg1, arg2) {
            return arg1 === arg2;
        });

        Handlebars.registerHelper("neq", function (arg1, arg2) {
            return arg1 !== arg2;
        });

        Handlebars.registerHelper("gt", function (arg1, arg2) {
            return arg1 > arg2;
        });

        Handlebars.registerHelper("lt", function (arg1, arg2) {
            return arg1 < arg2;
        });

        Handlebars.registerHelper("click", function (fn, redraw) {
            if (typeof base[fn] === "function") {
                base.onclickHandles.push({
                    fn: base[fn].bind(base),
                    redraw: typeof redraw === "boolean" ? redraw : true,
                    data: this,
                });

                var index = base.onclickHandles.length - 1;
                return `data-onclickhandler='${index}'`;
            } else {
                console.error(
                    `Error: Method ${fn} does not exist on the class.`
                );
                return "";
            }
        });

        Handlebars.registerHelper("bind", function (prop) {
            base.bindHandles.push({
                prop: prop,
                data: this,
            });
            var index = base.bindHandles.length - 1;
            return `data-bind='${index}'`;
        });

        Handlebars.registerHelper("call", function (fn) {
            if (typeof base[fn] === "function") {
                var funct = base[fn].bind(base);
                return funct(this);
            } else {
                console.error(
                    `Error: Method ${fn} does not exist on the class.`
                );
                return "";
            }
        });
    }

    loadTemplate(callback) {
        if (this.template) {
            callback();
        } else {
            fetch(this.templatePath)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! status: ${response.status}`
                        );
                    }
                    return response.text();
                })
                .then((templateHtml) => {
                    this.template = Handlebars.compile(templateHtml);
                    callback();
                })
                .catch((error) => {
                    console.error(
                        "Error: Could not load template " +
                            this.templatePath +
                            " " +
                            error.message
                    );
                });
        }
    }

    render() {
        this.onclickHandles = [];
        this.bindHandles = [];
        this.loadTemplate(() => {
            const html = this.template(this);

            const targetElement = document.querySelector(this.target);
            if (targetElement) {
                targetElement.innerHTML = html;
            } else {
                console.error(
                    `The target "${this.target}" could not be found.`
                );
            }

            this.bindProps();
            this.bindEvents();
        });
    }

    bindEvents() {
        const base = this;
        document
            .querySelectorAll("[data-onclickhandler]")
            .forEach((element) => {
                const index = parseInt(
                    element.getAttribute("data-onclickhandler"),
                    10
                );
                const handle = base.onclickHandles[index];

                element.addEventListener("click", function () {
                    const redraw = handle.redraw;
                    if (redraw) {
                        const state1 = base.serialize();
                        handle.fn(handle.data); // Execute the function
                        const state2 = base.serialize();
                        if (state1 !== state2) base.render();
                    } else {
                        handle.fn(handle.data); // Execute the function without redraw
                    }
                });
            });
    }

    bindProps() {
        const base = this;
        document.querySelectorAll("[data-bind]").forEach((element) => {
            const index = parseInt(element.getAttribute("data-bind"), 10);
            const handle = base.bindHandles[index];

            var propName = handle.prop;
            var data = null;

            if (propName.startsWith("base.")) {
                data = base;
                propName = handle.prop.substring(5);
            } else if (propName.startsWith("this.")) {
                data = handle.data;
                propName = handle.prop.substring(5);
            } else {
                data = handle.data;
            }

            // For input elements like textboxes, this sets the value
            if (
                element.tagName === "INPUT" ||
                element.tagName === "SELECT" ||
                element.tagName === "TEXTAREA"
            ) {
                element.value = data[propName];
            } else {
                // For other elements, you might want to set their innerHTML or textContent
                element.textContent = data[propName];
            }

            element.addEventListener("change", function () {
                data[propName] = element.value; // Assumes value is appropriate for all uses
                base.render();
            });
        });
    }

    serialize() {
        var replacer = function (key, value) {
            var excludeKeys = [
                "onclickHandles",
                "bindHandles",
                "target",
                "template",
                "templatePath",
            ];
            if (excludeKeys.indexOf(key) > -1) {
                return undefined;
            }
            return value;
        };

        return JSON.stringify(this, replacer);
    }
}
