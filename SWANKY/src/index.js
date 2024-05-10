import { add, getToday } from "./util";
import './css/index.css'

const h1 = document.createElement('h1');
h1.innerHTML = "Maybe today is " + getToday();
document.body.appendChild(h1);
