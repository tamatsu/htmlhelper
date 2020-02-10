// HTML
interface Attribute {
  (targetElement: Element): void
}

function onClick(f:() => void): Attribute {
  return (e: EventTarget) => {
    e.addEventListener('click', f)
  }
}

function onFocusout(f:() => void): Attribute {
  return (e: EventTarget) => {
    e.addEventListener('focusout', f)
  }
}

function text(str: string): Text {
  return document.createTextNode(str)
}

function div(attributes: Attribute[], children: Node[]): HTMLDivElement {
  const e = document.createElement('div')

  children.forEach(v => e.appendChild(v))
  attributes.forEach(v => v(e))

  return e
}

function button(attributes: Attribute[], str: string): HTMLButtonElement {
  const e = document.createElement('button')

  e.innerText = str
  attributes.forEach(v => v(e))
  return e
}

function input(attributes: Attribute[], value: string): HTMLInputElement {
  const e = document.createElement('input')
  e.value = value

  attributes.forEach(v => v(e))
  return e
}
