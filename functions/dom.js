/**
 * 
 * @param {string} tagName 
 * @param {object } attributtes
 * @returns {HTMLElement} 
 */
export function createElement(tagName, attributtes = {}) {
    const element = document.createElement(tagName)
    
    for (const [attribute, value] of Object.entries(attributtes)) {
        if(value !== null) {
            element.setAttribute(attribute, value)
        }
    }
    return element
}

export function cloneTemplate(id) {
    return document.getElementById(id).content.cloneNode(true)
}