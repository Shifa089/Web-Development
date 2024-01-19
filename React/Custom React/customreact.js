function customRender(ReactElement,container)
{
    // const domElement = document.createElement(ReactElement.type);
    // domElement.innerHTML = ReactElement.children;
    // domElement.setAttribute('href',ReactElement.props.href);
    // domElement.setAttribute('target',ReactElement.props.target);
    // container.appendChild(domElement);
    const domElement = document.createElement(ReactElement.type);
    domElement.innerHTML = ReactElement.children;
    for(property in ReactElement.props)
    {
        domElement.setAttribute(property,ReactElement.props.property);
    }
    container.appendChild(domElement);
}

const ReactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");

customRender(ReactElement,mainContainer);