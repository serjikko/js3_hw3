function getPath(element) {
    if (!(element instanceof Element)) return;

    const path = [];
    while (element.nodeType === Node.ELEMENT_NODE) {
        let selector = element.nodeName.toLowerCase();
        
        if (element.id) {
            selector += `#${element.id}`;
        } else {
            const nth = Array.from(element.parentNode.children).filter(child => 
                child.nodeName.toLowerCase() === element.nodeName.toLowerCase()
            ).indexOf(element) + 1;
            selector += `:nth-of-type(${nth})`;
        }
        
        path.unshift(selector);
        element = element.parentNode;
    }
    
    return path.join(' > ');
}



// const element = document.querySelector('a');
// const path = getPath(element);
// console.log(path);

