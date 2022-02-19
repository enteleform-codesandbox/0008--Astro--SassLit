import {LitElement, html} from "lit"


export const tagName = "lit-counter"

class Counter extends LitElement{
	static get properties(){
		return {
			count: {
				type: Number,
			},
		}
	}

	constructor(){
		super()
		this.count = 0
	}

	add     (){this.count++}
	subtract(){this.count--}

	render(){
		return html`
			<link rel="stylesheet" href="/Styles/Counter.css">

			<div class="counter">
				<button @click=${this.subtract}>-</button>
				<pre>${this.count}</pre>
				<button @click=${this.add}>+</button>
			</div>

			<div class="counter-message">
				<slot/>
			</div>
		`
	}
}

customElements.define(tagName, Counter)
