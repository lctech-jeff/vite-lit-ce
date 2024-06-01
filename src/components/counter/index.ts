import { TailwindElement } from '@/shared/tailwind.element.ts'
import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import style from './style.css?inline'

@customElement('j-counter')
export class JCounter extends TailwindElement(style) {
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
    'j-counter': JCounter
  }
}
