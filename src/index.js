import _ from 'lodash';
import styles from './style.css';
import Book from './book.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  console.log('styles',styles);

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Book;

  element.appendChild(myIcon);


  console.log('Book',Book);

  return element;
}

document.body.appendChild(component());