# HandlebarsBoundView Class Overview

The `HandlebarsBoundView` class provides a robust framework for developers to seamlessly integrate Handlebars templates with dynamic data and events in web applications. It is designed to facilitate the creation of reactive UI components, significantly reducing the boilerplate code typically associated with handling template rendering and data binding.

To utilize the HandlebarsBoundView class effectively, a developer simply needs to create a model that inherits from the HandlebarsBoundView class. Upon instantiation of their model, the developer specifies a target div where the content will be rendered, as well as the path to an HTML template. Following this setup, the template is automatically loaded, bound to the model, and then rendered within the specified target div. This model has the capability to manually trigger re-rendering as needed. Additionally, it intelligently tracks changes to its properties through UI bindings—such as those initiated by bind or click events—and automatically re-renders the content to reflect these changes. This mechanism ensures that the UI stays in sync with the underlying data model, providing a seamless and reactive user experience.

## Features

- **Dynamic Template Loading and Rendering**: Automatically loads and compiles Handlebars templates, then injects the rendered HTML into a specified target element in the DOM.

- **Two-Way Data Binding**: Facilitates two-way data binding between the component's properties and the DOM elements in the template, allowing for real-time updates.

- **Event Handling**: Simplifies the process of attaching event listeners to DOM elements. Event handlers (like click) can be defined within the class and easily referenced within the template, and are automatically bound together. 

- **Custom Helper Registration**: Comes with a set of built-in Handlebars helpers (`eq`, `neq`, `gt`, `lt`, `click`, `bind`, `call`, `nullOrEmpty`) to support common conditional logic, event handling, and property binding directly within templates. These helpers enrich the template's expressiveness and interaction capabilities, akin to binding mechanisms found in MVVM.

- **Nested Property Support**: Provides utility functions for accessing and modifying nested properties, ensuring that complex data structures can be easily managed. This feature is crucial for handling sophisticated models that are typical in modern web applications, enabling deep binding and manipulation capabilities.


## Scalability and Flexibility

The `HandlebarsBoundView` class is designed to scale with the complexity of your web application. It allows for:

- **Two-Way Binding on an Entire Page**: You can leverage the class to manage the state and interactions across an entire web page, creating a cohesive and interactive user experience.
  
- **Multiple Instances Controlling Different Widgets**: It supports the instantiation of multiple components on the same page, each controlling different widgets or sections. This feature is particularly useful for building complex applications with modular components that need to operate independently yet cohesively.


### Prerequisites

Ensure Handlebars.js is included in your project. You can add it via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/handlebars/dist/handlebars.min.js"></script>
```

### Installation

Copy the `HandlebarsBoundView` class code into your project, or include it as a module, depending on your setup.

### Usage

Extend the `HandlebarsBoundView` to create your custom components:

```javascript
class MyCustomComponent extends HandlebarsBoundView {
    constructor(target) {
        super(target, "path/to/your/template.html");
        // Initialize component state here
    }
    // Component methods and logic go here
}
```

Define a Handlebars template for your component:

```html
<!-- path/to/your/template.html -->
<div>
    {{#each items}}
        <div>{{this}}</div>
    {{/each}}
</div>
```

Initialize your component within the application:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const component = new MyCustomComponent("#component-target");
    component.render();
});
```

## Advanced Features

## Control Binding with the `bind` Keyword

Control binding is a powerful feature in `HandlebarsBoundView` that enables two-way data binding between your JavaScript object properties and HTML form elements. This mechanism keeps your UI in sync with your application's state without requiring additional code to update the UI manually when the data changes.

The `bind` keyword is used within your Handlebars templates to specify which property of your JavaScript object should be bound to a particular UI element. When the property's value changes, the UI automatically updates to reflect the new value. Similarly, when the UI element's value changes (e.g., through user input), the corresponding property on your JavaScript object is updated to reflect that change.

### Usage

To use control binding, add a `bind` attribute to an HTML element in your Handlebars template. The value of this attribute should be the path to the property you wish to bind. The `HandlebarsBoundView` class takes care of the rest, automatically setting up the two-way binding.

Please note, binding to 'this' will bind to the local data structure in handlebars.  Binding to 'base' binds to the base of the controller class.

```html
<!-- Template example with control binding to local data available to handlebars -->
<input type="text" {{{bind "this.propertyName"}}} />

<!-- Template example with control binding to root of controller class -->
<input type="text" {{{bind "base.propertyName"}}} />


### Event Binding

Use the built-in methods to attach events to your template elements:

```html
<button {{{click "handleClick"}}}>Click me</button>
```

```javascript
handleClick() {
    console.log('Button was clicked!');
}
```

## Contributing

Wanted: Time travelers, wizards, and coding enthusiasts! Your mission, should you choose to accept it, involves crafting pull requests filled with enhancements, bug fixes, or shiny new features. Dive into the magical world of our codebase, where every line of code you contribute brings us one step closer to world domination (or at least a really awesome project).

Remember, with great power comes great responsibility. Use your coding powers for good, and together, we can make software history. Or at least have a good laugh trying. Submit your pull requests today and join our league of extraordinary developers!

P.S.: Capes and superhero costumes are optional but highly encouraged during code submissions.

## License

This project is released into the public domain with the intention of contributing positively to the global developer community. You are free to use, modify, distribute, and build upon this work for any purpose, without any restrictions. We hope it helps make the world a better place, one developer at a time.

Please note, however, that this software is provided 'as is', without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.
