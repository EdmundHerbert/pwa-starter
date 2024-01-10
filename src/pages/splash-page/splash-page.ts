import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        css`
          <CSS for your page goes here>
        `
    ];

    render() {
        return html`
        <div>
          <image src="images/splash_page.png" alt="Splash page">
        </div>
        `;
    }
}