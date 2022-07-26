import './style.css';
import logo from './images/logo.png';

const logoDiv = document.querySelector('.logo');
const myLogo = new Image();
myLogo.src = logo;
logoDiv.appendChild(myLogo);
