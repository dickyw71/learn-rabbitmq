import _ from 'lodash'
import './style.css'
import Logo from './logo.svg'

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    let _logo = new Image()
    _logo.src = Logo

    element.appendChild(_logo)
    
    return element;
}

document.body.appendChild(component());

