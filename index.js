import renderBookList, { addBook, submitBook } from './modules/bookList.js';
import Nav from './modules/navigation.js';
import updateDateTime from './modules/time.js';

// Event listener for navigation links
Nav();

// Display time
updateDateTime();

// Event handler for the form submission
submitBook();

// Initial rendering
renderBookList();

addBook();
