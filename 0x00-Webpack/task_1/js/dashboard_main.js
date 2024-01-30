import $ from 'jquery';
import _ from 'lodash';

// Initialize count
let count = 0;

// Function to update the counter and set the content of the paragraph element
const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

// Append elements to the body
$(document).ready(function () {
  // Paragraph element: Holberton Dashboard
  $('body').append('<p>Holberton Dashboard</p>');

  // Paragraph element: Dashboard data for the students
  $('body').append('<p>Dashboard data for the students</p>');

  // Button element with the text Click here to get started
  $('body').append('<button id="startBtn">Click here to get started</button>');

  // Paragraph element with id 'count'
  $('body').append('<p id="count"></p>');

  // Another paragraph element: Copyright - Holberton School
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind the debounce function to the click event on the button
  const debouncedUpdateCounter = _.debounce(updateCounter, 1000); // 1000 milliseconds debounce time
  $('#startBtn').on('click', debouncedUpdateCounter);
});
