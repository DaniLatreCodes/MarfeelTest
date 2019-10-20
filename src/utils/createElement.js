const createElement = (element, attributes, childElement) =>{
  const customElement = document.createElement(element)
  if(attributes.length){
    let customAttributes = ''
    attributes.forEach( att => customAttributes + ' ' + att)
    customElement.setAttribute('class', attributes.toString().replace(/,/g,' '))
  }
  if(childElement){
    childElement.forEach( child => customElement.appendChild(child))
  }
  return customElement
}

export default createElement