import * as lit_html from 'lit-html';
import * as lit from 'lit';
import { LitElement } from 'lit';

declare class SimpleGreeting extends LitElement {
    static styles: lit.CSSResult;
    name?: string;
    render(): lit_html.TemplateResult<1>;
}

export { SimpleGreeting };
