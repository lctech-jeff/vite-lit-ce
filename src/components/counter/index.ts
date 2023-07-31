import { TailwindElement } from '@/shared/tailwind.element.ts'
import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import style from './style.css?inline'

@customElement('my-counter')
export class MyCounter extends TailwindElement(style) {
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <button @click=${this._onClick} part="button" class="px-5 py-2.5">count is ${this.count}</button>
    `
  }

  private _onClick() {
    this.count++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-counter': MyCounter
  }
}
