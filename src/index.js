// import _ from 'lodash'
import printMe from './print.js'
import './styles.css'

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button')

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = 'Hello Richard'
 
    btn.innerHTML = 'Click me and check the console.'
    btn.onclick = printMe

    element.appendChild(btn)

    return element;
}

let element = component()
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!')
        document.body.removeChild(element)
        element = component()
        document.body.appendChild(element)
    })
}

