import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 500);



$('body').append('<p>Dashboard data for the students</p>');

$('body').append('<p>Copyright - Holberton School</p>');

$('button').on('click', debouncedUpdateCounter);
