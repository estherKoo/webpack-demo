import _ from 'lodash';
import './style.css'
import Kitty from './kitty.jpeg'

function component() {
  const element = document.createElement('div');
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的 div 中。
  // const myImg = new Image();
  // myImg.src = Kitty;

  // element.appendChild(myImg);

  return element;
}
    
document.body.appendChild(component());