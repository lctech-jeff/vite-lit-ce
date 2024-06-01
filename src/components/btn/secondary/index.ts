import { TailwindElement } from '@/shared/tailwind.element.ts'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import style from './style.css?inline'

@customElement('j-btn-secondary')
export class JBtnSecondary extends TailwindElement(style) {
  render() {
    return html`
      <button part="button" class="px-5 py-2.5">Secondary</button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'j-btn-secondary': JBtnSecondary
  }
}
