"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/index.mts
var src_exports = {};
__export(src_exports, {
  SimpleGreeting: () => SimpleGreeting
});
module.exports = __toCommonJS(src_exports);
var import_lit = require("lit");
var import_decorators = require("lit/decorators.js");
var SimpleGreeting = class extends import_lit.LitElement {
  constructor() {
    super(...arguments);
    this.name = "World";
  }
  // Render the UI as a function of component state
  render() {
    return import_lit.html`<p>Hello, ${this.name}!</p>`;
  }
};
// Define scoped styles right with your component, in plain CSS
SimpleGreeting.styles = import_lit.css`
    :host {
      color: blue;
    }
  `;
__decorateClass([
  (0, import_decorators.property)()
], SimpleGreeting.prototype, "name", 2);
SimpleGreeting = __decorateClass([
  (0, import_decorators.customElement)("simple-greeting")
], SimpleGreeting);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SimpleGreeting
});
//# sourceMappingURL=index.cjs.map