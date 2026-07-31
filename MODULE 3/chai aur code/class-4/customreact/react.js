const root = document.getElementById('root');

const element = {
    type:'a',
    props :{
        href : 'https://google.com',
        target : '_blank'
    },
    text : 'click' 
}
function customRender(element , root){
    // const domElement = document.createElement(element.type)
    // domElement.innerText = element.text
    // domElement.setAttribute('href', element?.props?.href)
    // domElement.setAttribute('target' , element?.props?.target)

    // root.appendChild(domElement)


    const domElement = document.createElement(element.type)
        domElement.innerText = element.text
    for (const prop in element.props) {
        if(prop == 'Children' ) ;
        domElement.setAttribute(prop , element.props[prop])
    }
    
    root.appendChild(domElement)
}

customRender(element , root)
